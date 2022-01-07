import { IPC } from './IPC'
import { createRange } from '../utils/createRange'
import type { Client } from '../client/Client'

export interface UncaughtProcError {
  name: string
  message: string
  stack: string
}

export interface ProcessEventPartials {
  payload: string
  data?: Record<string, unknown>
  cluster?: number
}

export interface BroadcastEvalResponse {
  id: number
  shards: number[]
  result: any
  error: any
}

export interface BroadcastEvalEvent extends ProcessEventPartials {
  data: {
    callback: string
  }
}

export type BroadcastEvalCallback = (client: Client) => any

export interface Payloads {
  [key: string]: (...args: any[]) => void | Promise<void>
}

export class ClusterPartial {
  protected started = false
  protected readonly _client: Client

  public readonly id: number

  public readonly totalShards: number
  public readonly firstShard: number
  public readonly lastShard: number
  public readonly totalClusters: number

  public readonly ipc: IPC

  public constructor(client: Client) {
    this._client = client

    // We retrieve this clusteres needed info from env.
    this.totalShards = parseInt(process.env['DJSeed::Total_Shard_Amount'] ?? '-1', 10)
    this.firstShard = parseInt(process.env['DJSeed::First_Shard_Identifier'] ?? '-1', 10)
    this.lastShard = parseInt(process.env['DJSeed::Last_Shard_Identifier'] ?? '-1', 10)
    this.id = parseInt(process.env['DJSeed::Child_Cluster_Identifier'] ?? '-1', 10)
    this.totalClusters = parseInt(process.env['DJSeed::Total_Child_Cluster_Amount'] ?? '-1', 10)

    if ([this.totalShards, this.firstShard, this.lastShard, this.id, this.totalClusters].includes(-1)) {
      throw new Error('Environment variables invalid. Please do not tamper with DJSeeds environment variables')
    }

    // Create new IPC for cluster.
    this.ipc = new IPC(this.id)

    // Ignore process listener amount
    process.setMaxListeners(Infinity)
  }

  protected _handleErrors(): void {
    process.on('uncaughtException', (err) => {
      const name = String(err.name)
      const message = String(err.message)
      const stack = String(err.stack)

      process.send!({
        payload: 'DJSeed::Cluster_Error',
        data: {
          id: this.id,
          shards: createRange(this.firstShard, this.lastShard),
          type: 'Uncaught Exception',
          error: {
            name,
            message,
            stack,
          },
        },
      })
    })
    process.on('unhandledRejection', (err) => {
      const data: Record<string, string> = {}
      if (err instanceof Error) {
        data.name = String(err.name)
        data.message = String(err.message)
        data.stack = String(err.stack)
      } else {
        const error = new Error(String(err) || 'Untraceable Error')
        data.name = String(error.name)
        data.message = String(error.message)
        data.stack = String(error.stack)
      }

      process.send!({
        payload: 'DJSeed::Cluster_Error',
        data: {
          id: this.id,
          shards: createRange(this.firstShard, this.lastShard),
          type: 'Unhandled Rejection',
          error: data,
        },
      })
    })
  }

  protected _registerClientListeners(): void {
    this._client
      .on('error', (err) => {
        const name = String(err.name)
        const message = String(err.message)
        const stack = String(err.stack)

        process.send!({
          payload: 'DJSeed::Cluster_Error',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Client Error',
            error: {
              name,
              message,
              stack,
            },
          },
        })
      })
      .on('warn', (msg) => {
        const message = String(msg)

        process.send!({
          payload: 'DJSeed::Cluster_Warn',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Client Warn',
            message,
          },
        })
      })
      .on('shardReady', (id, unavailabledGuilds) => {
        process.send!({
          payload: 'DJSeed::Shard_Ready',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Shard Is Ready',
            shard: id,
            unavailabledGuilds,
          },
        })
      })
      .on('shardResume', (id, replayedEvents) => {
        process.send!({
          payload: 'DJSeed::Shard_Resume',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Shard Resumed',
            shard: id,
            replayedEvents,
          },
        })
      })
      .on('shardReconnecting', (id) => {
        process.send!({
          payload: 'DJSeed::Shard_Reconnecting',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Shard Is Reconnecting',
            shard: id,
          },
        })
      })
      .on('shardDisconnect', (closeEvent, id) => {
        process.send!({
          payload: 'DJSeed::Shard_Disconnect',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Shard Disconnected',
            shard: id,
            closeEvent,
          },
        })
      })
      .on('shardError', (err, id) => {
        const name = String(err.name)
        const message = String(err.message)
        const stack = String(err.stack)

        process.send!({
          payload: 'DJSeed::Shard_Error',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Client Error',
            shard: id,
            error: {
              name,
              message,
              stack,
            },
          },
        })
      })
      .on('ready', () => {
        process.send!({
          payload: 'DJSeed::Cluster_Ready',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: `Shards ${this.firstShard} - ${this.lastShard} are ready`,
          },
        })

        process.send!({ payload: 'DJSeed::Cluster_Shards_Prepared' })
      })
  }

  protected _registerPayloads(): void {
    process.on('message', (msg: ProcessEventPartials) => {
      if (!msg.payload) return
      if (!this.payloads.hasOwnProperty(msg.payload)) return false

      const exec = async (): Promise<void> => {
        await this.payloads[msg.payload](msg)
      }

      exec().catch((err) => {
        const data: Record<string, string> = {}
        if (err instanceof Error) {
          data.name = String(err.name)
          data.message = String(err.message)
          data.stack = String(err.stack)
        } else {
          const error = new Error(String(err) || 'Untraceable Error')
          data.name = String(error.name)
          data.message = String(error.message)
          data.stack = String(error.stack)
        }

        data.message += String("\nThis has to do with your code, NOT DJSeed's!")

        process.send!({
          payload: 'DJSeed::Cluster_Error',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            type: 'Payload Execution Failed.',
            error: data,
          },
        })
      })
    })
  }

  protected payloads: Payloads = {
    'DJSeed::Stats_Request': (): void => {
      const shards = []
      for (const shard of this._client.ws.shards.values()) {
        shards.push({
          id: shard.id,
          status: shard.status,
          latency: shard.ping,
        })
      }
      process.send!({
        payload: 'DJSeed::Stats_Return',
        data: {
          id: this.id,
          guilds: this._client.guilds.cache.size,
          users: this._client.users.cache.size,
          uptime: this._client.uptime,
          ram: process.memoryUsage().rss,
          shards,
          largeGuilds: this._client.guilds.cache.filter((g) => g.large).size,
          exclusiveGuilds: this._client.guilds.cache.filter((g) => g.members.cache.filter((m) => m.user.bot).size === 1)
            .size,
        },
      })
    },
    'DJSeed::Broadcast_Eval_Request': async (msg: BroadcastEvalEvent): Promise<void> => {
      try {
        // This concern is voiced in documentation
        // eslint-disable-next-line no-eval
        const callback: BroadcastEvalCallback = (0, eval)(msg.data.callback)
        const result = await callback(this._client)

        process.send!({
          payload: 'DJSeed::Broadcast_Eval_Response',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            result,
            error: null,
          },
        })
      } catch (err) {
        const data: Record<string, string> = {}
        if (err instanceof Error) {
          data.name = String(err.name)
          data.message = String(err.message)
          data.stack = String(err.stack)
        } else {
          const error = new Error(String(err) || 'Untraceable Error')
          data.name = String(error.name)
          data.message = String(error.message)
          data.stack = String(error.stack)
        }

        process.send!({
          payload: 'DJSeed::Broadcast_Eval_Response',
          data: {
            id: this.id,
            shards: createRange(this.firstShard, this.lastShard),
            result: null,
            error: data,
          },
        })
      }
    },
  }

  public start(): void {
    if (!this.started) {
      this._handleErrors()
      this._registerPayloads()
      this._registerClientListeners()

      this.started = true
    }
  }
}
