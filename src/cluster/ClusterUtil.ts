import type { ProcessEventPartials, Payloads, BroadcastEvalCallback, BroadcastEvalResponse } from './ClusterPartial'
import { createRange } from '../utils/createRange'
import { getGateway } from '../utils/getGateway'
import { chunk } from '../utils/chunk'
import { EventEmitter } from 'events'
import nodeCluster, { Worker } from 'cluster'
import path from 'path'
import os from 'os'
import type { IPCEvent } from './IPC'

const coreCount = os.cpus().length

export interface ClusterUtilOptions {
  /**
   * Total Amount Of Cluster to Open.
   */
  clusters?: number
  /**
   * Total Amount of Shards to Request.
   */
  shards?: number
  /**
   * What Shard To Start On. (Useful for horizontal scaling)
   */
  firstShard?: number
  /**
   * What Shard To End On. (Useful for horizontal scaling)
   */
  lastShard?: number
}

interface Cluster {
  workerId: number
  firstShard: number
  lastShard: number
}

export class ClusterUtil extends EventEmitter {
  protected _token: string
  protected _file: string
  protected _totalShards: number | null
  protected _totalClusters: number | null
  protected _firstShard: number
  protected _lastShard: number
  protected _clusters = new Map<number, Cluster>()
  protected _workers = new Map<number, number>()

  public constructor(token: string, file: string, options?: ClusterUtilOptions) {
    super()

    this._token = token
    this._file = file
    this._totalShards = options?.shards ?? null
    this._totalClusters = options?.clusters ?? null
    this._firstShard = options?.firstShard ?? 0
    this._lastShard = options?.lastShard ?? 0

    // Ignore process listener amount
    process.setMaxListeners(Infinity)
    nodeCluster.setMaxListeners(Infinity)
  }

  public isPrimary(): boolean {
    return nodeCluster.isPrimary
  }

  protected _preStart(): void {
    process.nextTick(async () => {
      this.emit('DJSeed::Cluster_Util_Info', 'Started!')
      if (!this._totalShards) {
        try {
          const gateway = await getGateway(this._token)
          this._totalShards = gateway.shards
        } catch (error) {
          console.error(error)
          throw new Error('Failed to fetch bot gateway :/')
        }
      }
      if (!this._totalClusters) {
        this._totalShards < coreCount ? (this._totalClusters = this._totalShards) : (this._totalClusters = coreCount)
      }

      if (this._totalClusters > this._totalShards) {
        throw new Error('Attempting to open more clusters than shards.')
      }

      if (!this._lastShard) {
        this._lastShard = this._totalShards - 1
      }

      this.emit(
        'DJSeed::Cluster_Util_Info',
        `Calculations Complete! Starting ${this._totalShards} shards across ${this._totalClusters} clusters!`,
      )

      nodeCluster.setupPrimary({
        silent: false,
      })

      await this._start()
    })
  }

  protected async _start(): Promise<void> {
    const shards = chunk(createRange(this._firstShard, this._lastShard), this._totalClusters!)
    for (const chunk of shards) {
      const clusterId = shards.indexOf(chunk)
      const firstShard = Math.min(...chunk)
      const lastShard = Math.max(...chunk)

      const worker = nodeCluster.fork({
        'DJSeed::Cluster_Util_Enabled': true,
        'DJSeed::Total_Shard_Amount': this._totalShards,
        'DJSeed::First_Shard_Identifier': firstShard,
        'DJSeed::Last_Shard_Identifier': lastShard,
        'DJSeed::Child_Cluster_Identifier': clusterId,
        'DJSeed::Total_Child_Cluster_Amount': this._totalClusters,
      })

      const cluster = this._clusters.get(clusterId)
      this._clusters.set(
        clusterId,
        Object.assign(cluster ?? {}, {
          firstShard,
          lastShard,
          workerId: worker.id,
        }),
      )
      this._workers.set(worker.id, clusterId)

      await this._awaitResponse()
    }

    this.emit('DJSeed::Cluster_Util_Info', 'All clusters have launched!')
  }

  protected async _awaitResponse(): Promise<boolean> {
    return new Promise((res) => {
      const cb = (_: Worker, msg: ProcessEventPartials) => {
        if (msg.payload && msg.payload === 'DJSeed::Cluster_Shards_Prepared') {
          res(true)
          nodeCluster.removeListener('message', cb)
        }
      }
      nodeCluster.on('message', cb)
    })
  }

  protected _registerHandlers(): void {
    process.on('uncaughtException', (err) => {
      const name = String(err.name)
      const message = String(err.message)
      const stack = String(err.stack)

      this.emit('DJSeed::Error', {
        type: 'Uncaught Exception',
        error: {
          name,
          message,
          stack,
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

      this.emit('DJSeed::Error', {
        type: 'Unhandled Rejection',
        error: data,
      })
    })
  }

  protected _registerWorkerHandlers(): void {
    nodeCluster.on('disconnect', (w) => {
      const clusterId = this._workers.get(w.id)!
      const cluster = this._clusters.get(clusterId)!
      this.emit('DJSeed::Cluster_Warn', {
        id: clusterId,
        shards: createRange(cluster.firstShard, cluster.lastShard),
        type: 'Cluster Disconnected',
        message: 'Cluster Disconnected For Unknown Reason. Rebooting momentarily.',
      })
    })
    nodeCluster.on('exit', (w, c, s) => {
      this.restartCluster(w, c, s)
    })
  }

  protected restartCluster(worker: Worker, code: number, signal: string): void {
    const clusterId = this._workers.get(worker.id)!
    const cluster = this._clusters.get(clusterId)!
    this.emit('DJSeed::Cluster_Death', {
      id: clusterId,
      shards: createRange(cluster.firstShard, cluster.lastShard),
      type: 'Cluster Died',
      message: 'Cluster has been killed. Attempting restart!',
      code,
      signal,
    })

    const newWorker = nodeCluster.fork({
      'DJSeed::Cluster_Util_Enabled': true,
      'DJSeed::Total_Shard_Amount': this._totalShards,
      'DJSeed::First_Shard_Identifier': cluster.firstShard,
      'DJSeed::Last_Shard_Identifier': cluster.lastShard,
      'DJSeed::Child_Cluster_Identifier': clusterId,
      'DJSeed::Total_Child_Cluster_Amount': this._totalClusters,
    })
    this._workers.delete(worker.id)
    this._clusters.set(clusterId, Object.assign(cluster, { workerId: newWorker.id }))
    this._workers.set(newWorker.id, clusterId)
  }

  protected _registerPayloads(): void {
    nodeCluster.on('message', (worker, msg: ProcessEventPartials) => {
      if (!msg.payload) return
      if (!this.payloads.hasOwnProperty(msg.payload)) return false
      const clusterId = this._workers.get(worker.id)

      const exec = async (): Promise<void> => {
        await this.payloads[msg.payload](msg, clusterId)
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

        this.emit('DJSeed::Error', {
          type: 'Payload Execution Failed.',
          error: data,
        })
      })
    })
  }

  protected payloads: Payloads = {
    'DJSeed::Cluster_Error': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Cluster_Warn': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Shard_Ready': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Shard_Resume': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Shard_Reconnecting': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Shard_Disconnect': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Shard_Error': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::Cluster_Ready': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
    },
    'DJSeed::IPC_Broadcast_Event': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.broadcast(msg.data as unknown as IPCEvent)
    },
    'DJSeed::IPC_Send_To_Event': (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendTo(msg.cluster!, msg.data as unknown as IPCEvent)
    },
  }

  public broadcast(message: IPCEvent, i = 0): void {
    if (isNaN(i)) i = 0
    const cluster = this._clusters.get(i)
    if (cluster) {
      nodeCluster.workers![cluster.workerId]?.send(message)
      this.broadcast(message, ++i)
    }
  }

  public sendTo(clusterId: number, message: IPCEvent): void {
    const cluster = this._clusters.get(clusterId)
    if (cluster) {
      const worker = nodeCluster.workers![cluster.workerId]
      if (worker) {
        worker.send(message)
      }
    }
  }

  public async broadcastEval(callback: BroadcastEvalCallback): Promise<BroadcastEvalResponse[]> {
    const responses: BroadcastEvalResponse[] = []
    for (const cluster of this._clusters.values()) {
      async function getEval(): Promise<BroadcastEvalResponse> {
        return new Promise((r) => {
          const cb = (_: Worker, m: ProcessEventPartials) => {
            if (m.payload === 'DJSeed::Broadcast_Eval_Response') {
              r(m.data as unknown as BroadcastEvalResponse)
              nodeCluster.removeListener('message', cb)
            }
          }
          nodeCluster.on('message', cb)
          nodeCluster.workers![cluster.workerId]?.send({
            payload: 'DJSeed::Broadcast_Eval_Request',
            data: { callback: callback.toString() },
          })
        })
      }

      responses.push(await getEval())
    }

    return Promise.all(responses)
  }

  public launch(): void {
    this._registerWorkerHandlers()
    this._registerPayloads()

    if (this.isPrimary()) {
      this._registerHandlers()
      this._preStart()
    } else if (nodeCluster.isWorker) {
      try {
        // Aware this is inproper but esm is being screwy
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require(path.resolve(this._file))
      } catch (err) {
        throw err
      }
    }
  }
}