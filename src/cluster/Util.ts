import type { ClusterStats, ProcessEventPartials, BroadcastEvalCallback, BroadcastEvalResponse } from '../types'

export class Util {
  protected readonly id: number

  public constructor(id: number) {
    this.id = id
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
}
