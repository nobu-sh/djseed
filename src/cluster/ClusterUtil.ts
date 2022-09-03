import nodeCluster, { Worker } from 'cluster'
import { EventEmitter } from 'events'
import os from 'os'
import path from 'path'
import type {
  IPCEvent,
  ClusterUtilOptions,
  Cluster,
  ProcessEventPartials,
  Payloads,
  BroadcastEvalCallback,
  BroadcastEvalResponse,
  Awaitable,
  ClusterUtilEvents,
  CommonError,
  ClusterStats,
  BroadcastEvalEvent,
} from '../types'
import { chunk } from '../utils/chunk'
import { createRange } from '../utils/createRange'
import { getGateway } from '../utils/getGateway'

const coreCount = os.cpus().length

export interface ClusterUtil {
  on: (<K extends keyof ClusterUtilEvents>(event: K, listener: (...args: ClusterUtilEvents[K]) => Awaitable<void>) => this) & (<S extends string | symbol>(
    event: Exclude<S, keyof ClusterUtilEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ) => this)

  once: (<K extends keyof ClusterUtilEvents>(event: K, listener: (...args: ClusterUtilEvents[K]) => Awaitable<void>) => this) & (<S extends string | symbol>(
    event: Exclude<S, keyof ClusterUtilEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ) => this)

  emit: (<K extends keyof ClusterUtilEvents>(event: K, ...args: ClusterUtilEvents[K]) => boolean) & (<S extends string | symbol>(event: Exclude<S, keyof ClusterUtilEvents>, ...args: unknown[]) => boolean)

  off: (<K extends keyof ClusterUtilEvents>(event: K, listener: (...args: ClusterUtilEvents[K]) => Awaitable<void>) => this) & (<S extends string | symbol>(
    event: Exclude<S, keyof ClusterUtilEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ) => this)

  removeAllListeners: (<K extends keyof ClusterUtilEvents>(event?: K) => this) & (<S extends string | symbol>(event?: Exclude<S, keyof ClusterUtilEvents>) => this)
}

// We need to override ClusterUtil to add
// typings to all the events.
// eslint-disable-next-line no-redeclare
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

    this.on('Cluster_Death', (data) => this.sendEvent({ payload: 'Cluster_Death', data }))
  }

  /**
   * Checks whether the current process
   * is the primary process or a child process.
   */
  public isPrimary(): boolean {
    return nodeCluster.isPrimary
  }

  protected _preStart(): void {
    process.nextTick(async () => {
      this.emit('Cluster_Util_Info', 'Started!')
      if (!this._totalShards) {
        try {
          const gateway = await getGateway(this._token)
          this._totalShards = gateway.shards
        } catch (error) {
          console.error(error)
          throw new Error('Failed to fetch bot gateway :/ Try again?? This is most likely a discord problem.')
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
        'Cluster_Util_Info',
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

    this.emit('Cluster_Util_Info', 'All clusters have launched!')
  }

  protected async _awaitResponse(): Promise<boolean> {
    return new Promise((res) => {
      const cb = (_: Worker, msg: ProcessEventPartials) => {
        if (msg.payload && msg.payload === 'Cluster_Shards_Prepared') {
          nodeCluster.removeListener('message', cb)
          res(true)
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

      this.emit('Cluster_Util_Error', {
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

      this.emit('Cluster_Util_Error', {
        type: 'Unhandled Rejection',
        error: data as unknown as CommonError,
      })
    })
  }

  protected _registerWorkerHandlers(): void {
    nodeCluster.on('disconnect', (w) => {
      const clusterId = this._workers.get(w.id)!
      const cluster = this._clusters.get(clusterId)!
      this.emit('Cluster_Warn', {
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
    this.emit('Cluster_Death', {
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

        this.emit('Cluster_Util_Error', {
          type: 'Payload Execution Failed.',
          error: data as unknown as CommonError,
        })
      })
    })
  }

  protected payloads: Payloads = {
    Cluster_Error: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Cluster_Warn: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Shard_Ready: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Shard_Resume: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Shard_Reconnecting: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Shard_Disconnect: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Shard_Error: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Cluster_Ready: (msg: ProcessEventPartials) => {
      this.emit(msg.payload, msg.data)
      this.sendEvent(msg)
    },
    Dispose_Self_Request: (msg: ProcessEventPartials) => {
      if (isNaN(msg.cluster ?? NaN)) return
      // this.emit(msg.payload, msg.data)
      this.sendEventTo(msg.cluster!, { payload: 'Dispose_Self' })
    },
    IPC_Broadcast_Event: (msg: ProcessEventPartials) => {
      if (!('event' in (msg.data ?? {}))) return
      // this.emit(msg.payload, msg.data)
      this.broadcast(msg.data as IPCEvent)
    },
    IPC_Send_To_Event: (msg: ProcessEventPartials) => {
      if (isNaN(msg.cluster ?? NaN) || !('event' in (msg.data ?? {}))) return
      // this.emit(msg.payload, msg.data)
      this.sendTo(msg.cluster!, msg.data as IPCEvent)
    },
    Util_All_Stats_Request: async (msg: ProcessEventPartials) => {
      if (isNaN(msg.cluster ?? NaN)) return
      this.sendEventTo(msg.cluster!, {
        payload: 'Util_All_Stats_Response',
        data: await this.getStats(),
      })
    },
    Util_Stats_Request: async (msg: ProcessEventPartials<{ clusterId?: number }>) => {
      if (isNaN(msg.cluster ?? NaN) || isNaN(msg.data?.clusterId ?? NaN)) return
      this.sendEventTo(msg.cluster!, {
        payload: 'Util_Stats_Response',
        data: [await this.getStatsFrom(msg.data!.clusterId!)],
      })
    },
    Util_Broadcast_Eval_Request: async (msg: BroadcastEvalEvent) => {
      if (isNaN(msg.cluster ?? NaN) || !('callback' in msg.data)) return
      this.sendEventTo(msg.cluster!, {
        payload: 'Util_Broadcast_Eval_Response',
        data: await this.broadcastEval(msg.data.callback as unknown as BroadcastEvalCallback, msg.data.references),
      })
    },
  }

  /**
   * Requests stats from all clusters and return array.
   */
  public async getStats(): Promise<ClusterStats[]> {
    const responses = []
    for (const cluster of this._clusters.keys()) {
      const stats = await this.getStatsFrom(cluster)
      if (stats) responses.push(stats)
    }

    return Promise.all(responses)
  }

  /**
   * Requests stats from a specific cluster.
   */
  public async getStatsFrom(clusterId: number): Promise<ClusterStats | undefined> {
    if (!this._clusters.has(clusterId)) return undefined
    const response = async (): Promise<ClusterStats> => new Promise((r) => {
      const callback = (_: Worker, m: ProcessEventPartials) => {
        if (m.payload === 'Cluster_Stats_Response') {
          nodeCluster.removeListener('message', callback)
          r(m.data as ClusterStats)
        }
      }
      nodeCluster.on('message', callback)
      this.sendEventTo(clusterId, { payload: 'Cluster_Stats_Request' })
    })
    return response()
  }

  /**
   * Send a raw event to all clusters.
   *
   * A raw event will be sent as a payload and data
   * it will be intercepted by the clusters `events`
   * property. This is a one way event emmitter.
   * @param {ProcessEventPartials} message Message to send.
   * @param {number} i OPTIONAL. Starting point.
   */
  public sendEvent(message: ProcessEventPartials, i = 0): void {
    if (isNaN(i)) i = 0
    const cluster = this._clusters.get(i)
    if (cluster) {
      nodeCluster.workers![cluster.workerId]?.send(message)
      this.sendEvent(message, ++i)
    }
  }

  /**
   * Send a raw event to a certain cluster.
   *
   * A raw event will be sent as a payload and data
   * it will be intercepted by the clusters `events`
   * property. This is a one way event emmitter.
   * @param {number} clusterId Id of cluster.
   * @param {ProcessEventPartials} message Message to send.
   */
  public sendEventTo(clusterId: number, message: ProcessEventPartials): void {
    const cluster = this._clusters.get(clusterId)
    if (cluster) {
      const worker = nodeCluster.workers![cluster.workerId]
      if (worker) {
        worker.send(message)
      }
    }
  }

  /**
   * Send an IPC event to all clusters.
   *
   * An IPC event will be sent as an event and arguments.
   * The main difference between IPC and raw is IPC is
   * multiple way communication. You can use it to
   * commiunicate with clusters and clusters can use it
   * to communicate with eachother.
   *
   * Also IPC events recieve the arguments differently
   * as IPC utilizes a spread operation.
   * @param {IPCEvent} message IPC event to send.
   * @param {number} i OPTIONAL. Starting point.
   */
  public broadcast(message: IPCEvent, i = 0): void {
    if (isNaN(i)) i = 0
    const cluster = this._clusters.get(i)
    if (cluster) {
      nodeCluster.workers![cluster.workerId]?.send(message)
      this.broadcast(message, ++i)
    }
  }

  /**
   * Send an IPC event to a certain cluster.
   *
   * An IPC event will be sent as an event and arguments.
   * The main difference between IPC and raw is IPC is
   * multiple way communication. You can use it to
   * commiunicate with clusters and clusters can use it
   * to communicate with eachother.
   *
   * Also IPC events recieve the arguments differently
   * as IPC utilizes a spread operation.
   * @param {number} clusterId Id of cluster.
   * @param {IPCEvent} message IPC event to send.
   */
  public sendTo(clusterId: number, message: IPCEvent): void {
    const cluster = this._clusters.get(clusterId)
    if (cluster) {
      const worker = nodeCluster.workers![cluster.workerId]
      if (worker) {
        worker.send(message)
      }
    }
  }

  /**
   * Sends callback as a string to every cluster then uses `eval`
   * to evaulate your code on that cluster. It will return an
   * array of objects which will contain cluster info and the
   * result/error that occured.
   * @param {BroadcastEvalCallback} callback Callback function.
   * @param {Record<string, unknown>} references References needed in callback.
   */
  public async broadcastEval<T>(
    callback: BroadcastEvalCallback,
    references?: Record<string, unknown>,
  ): Promise<BroadcastEvalResponse<T>[]> {
    const responses: BroadcastEvalResponse<T>[] = []
    for (const cluster of this._clusters.values()) {
      async function getEval(): Promise<BroadcastEvalResponse<T>> {
        return new Promise((r) => {
          const cb = (_: Worker, m: ProcessEventPartials) => {
            if (m.payload === 'Broadcast_Eval_Response') {
              nodeCluster.removeListener('message', cb)
              r(m.data as BroadcastEvalResponse<T>)
            }
          }
          nodeCluster.on('message', cb)
          nodeCluster.workers![cluster.workerId]?.send({
            payload: 'Broadcast_Eval_Request',
            data: { callback: callback.toString(), references },
          })
        })
      }

      responses.push(await getEval())
    }

    return Promise.all(responses)
  }

  /**
   * Sends a request to specified cluster to dispose itself.
   * Will result in the cluster exiting with code 0 and being automatically
   * restarted by `ClusterUtil`.
   * @param clusterId Id of cluster.
   */
  public disposeOf(clusterId: number): void {
    this.sendEventTo(clusterId, { payload: 'Dispose_Self' })
  }

  /**
   * Start the util.
   */
  public launch(): void {
    this._registerWorkerHandlers()
    this._registerPayloads()

    if (this.isPrimary()) {
      this._registerHandlers()
      this._preStart()
    } else if (nodeCluster.isWorker) {
      try {
        // Aware this is improper but esm is being screwy
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require(path.resolve(this._file))
      } catch (err) {
        throw err
      }
    }
  }
}
