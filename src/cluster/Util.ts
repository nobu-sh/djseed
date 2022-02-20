import type { ClusterStats, ProcessEventPartials, BroadcastEvalCallback, BroadcastEvalResponse } from '../types'

export class Util {
  protected readonly id: number

  public constructor(id: number) {
    this.id = id
    // Handle Dispose/Kill
    process.on('message', (msg: ProcessEventPartials) => {
      if (msg.payload === 'DJSeed::Dispose_Self') {
        process.exit(0)
      }
    })
  }

  /**
   * Requests stats from all clusters and return array.
   */
  public async getStats(): Promise<ClusterStats[]> {
    return new Promise((r) => {
      const callback = (msg: ProcessEventPartials) => {
        if (msg.payload === 'DJSeed::Util_All_Stats_Response') {
          process.removeListener('message', callback)
          r(msg.data as ClusterStats[])
        }
      }
      process.on('message', callback)
      process.send!({
        payload: 'DJSeed::Util_All_Stats_Request',
        cluster: this.id,
      })
    })
  }

  /**
   * Requests stats from a specific cluster.
   */
  public async getStatsFrom(clusterId: number): Promise<ClusterStats | undefined> {
    if (isNaN(clusterId)) return undefined
    return new Promise((r) => {
      const callback = (msg: ProcessEventPartials) => {
        if (msg.payload === 'DJSeed::Util_Stats_Response') {
          process.removeListener('message', callback)
          r((msg.data as ClusterStats[])[0] ?? undefined)
        }
      }
      process.on('message', callback)
      process.send!({
        payload: 'DJSeed::Util_Stats_Request',
        cluster: this.id,
        data: {
          clusterId,
        },
      })
    })
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
    return new Promise((r) => {
      const cb = (msg: ProcessEventPartials) => {
        if (msg.payload === 'DJSeed::Util_Broadcast_Eval_Response') {
          process.removeListener('message', cb)
          r(msg.data as BroadcastEvalResponse<T>[])
        }
      }
      process.on('message', cb)
      process.send!({
        payload: 'DJSeed::Util_Broadcast_Eval_Request',
        cluster: this.id,
        data: { callback: callback.toString(), references },
      })
    })
  }

  /**
   * Sends a request to specified cluster to dispose itself.
   * Will result in the cluster exiting with code 0 and being automatically
   * restarted by `ClusterUtil`.
   * @param clusterId Id of cluster.
   */
  public disposeOf(clusterId: number): void {
    process.send!({
      payload: 'DJSeed::Dispose_Self_Request',
      cluster: clusterId,
    })
  }
}
