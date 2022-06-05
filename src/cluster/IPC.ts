import type { IPCEvent } from '../types'

export class IPC {
  protected readonly _listeners = new Map<string, CallableFunction[]>()
  protected max: number

  protected readonly clusterId: number

  public constructor(cid: number, max = 50) {
    this.clusterId = cid
    this.max = max
    this._IPCListner()
  }

  protected _IPCListner(): void {
    process.on('message', (msg: IPCEvent) => {
      if (!msg.event) return
      this.emit(msg.event, ...(msg.args ?? []))
    })
  }

  /**
   * Add new event listener.
   * @param {string} event Event name.
   * @param {CallableFunction} listener callback.
   */
  public addListener(event: string, listener: CallableFunction): void {
    if (this._listeners.size >= this.max) {
      console.log(`warning: possible IPC memory leak detected. ${this._listeners.size} listeners registered.`)
    }
    this._listeners.set(event, [...(this._listeners.get(event) ?? []), listener])
  }

  /**
   * Remove specfic listener.
   * @param {string} event Event name.
   * @param {CallableFunction} listener callback.
   */
  public removeListener(event: string, listener: CallableFunction): void {
    const listeners = this._listeners.get(event)
    listeners?.splice(listeners.indexOf(listener))
  }

  /**
   * Remove all listeners under a specfic event.
   * @param {string} event Event name.
   */
  public removeListeners(event: string): void {
    this._listeners.delete(event)
  }

  /**
   * Remove all listeners.
   */
  public removeAllListeners(): void {
    this._listeners.clear()
  }

  /**
   * Envokes a specfic set of event listeners with provided params.
   *
   * `WARN` This is local not global!
   * @param {string} event Event name.
   * @param {...any[]} args Arguments.
   */
  public envokeEvent(event: string, ...args: unknown[]): void {
    this._listeners.get(event)?.forEach((listener) => {
      listener(...args)
    })
  }

  /**
   * Get all listeners under an event.
   * @param event Event name.
   */
  public listeners(event: string): CallableFunction[] | undefined {
    return this._listeners.get(event)
  }

  /**
   * Get event listener count.
   * @param event Event name.
   */
  public listenerCount(event: string): number {
    return this._listeners.get(event)?.length ?? 0
  }

  /**
   * Get max amount of liseners.
   */
  public getMaxListeners = () => this.max

  /**
   * Set max amount of listeners.
   * @param {number} n new amount.
   */
  public setMaxListeners(n: number): void {
    this.max = n
  }

  /**
   * Add new event listener.
   * @param {string} event Event name.
   * @param {CallableFunction} listener callback.
   */
  public on(event: string, listener: CallableFunction) {
    this.addListener(event, listener)
  }

  /**
   * Remove specfic listener.
   * @param {string} event Event name.
   * @param {CallableFunction} listener callback.
   */
  public off(event: string, listener: CallableFunction) {
    this.removeListener(event, listener)
  }

  /**
   * Envokes a specfic set of event listeners with provided params.
   *
   * `WARN` This is local not global!
   * @param {string} event Event name.
   * @param {...any[]} args Arguments.
   */
  public emit(event: string, ...args: unknown[]) {
    this.envokeEvent(event, ...args)
  }

  /**
   * Add new event listener that removes itself after envoked once.
   * @param {string} event Event name.
   * @param {CallableFunction} listener callback.
   */
  public once(event: string, listener: CallableFunction): void {
    const newListener = (...args: unknown[]) => {
      listener(...args)
      this.removeListener(event, newListener)
    }
    this.addListener(event, newListener)
  }

  /**
   * Sends an IPC event to all clusters. This will trigger all
   * listeners for given event on all clusters with given arguments.
   *
   * Note that any arguments given will become dereferenced so ensure
   * any references are deep cloned.
   * @param {string} event Event name.
   * @param {...any[]} content Arguments.
   */
  public send(event: string, ...content: unknown[]): void {
    process.send!({
      payload: 'IPC_Broadcast_Event',
      data: {
        event,
        content: content,
      },
    })
  }

  /**
   * Sends an IPC event to a certain cluster. This will trigger all
   * listeners for given event on given cluster with given arguments.
   *
   * Note that any arguments given will become dereferenced so ensure
   * any references are deep cloned.
   * @param {number} cluster Cluster id.
   * @param {string} event Event name.
   * @param {...any[]} content Arguments.
   */
  public sendTo(cluster: number, event: string, ...content: unknown[]): void {
    process.send!({
      payload: 'IPC_Send_To_Event',
      cluster,
      data: {
        event,
        content: content,
      },
    })
  }
}
