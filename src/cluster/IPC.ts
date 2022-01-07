export interface IPCEvent {
  event: string
  args?: unknown[]
}

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

  // Primary Methods
  public addListener(event: string, listener: CallableFunction): void {
    if (this._listeners.size >= this.max) {
      console.log(`warning: possible IPC memory leak detected. ${this._listeners.size} listeners registered.`)
    }
    this._listeners.set(event, [...(this._listeners.get(event) ?? []), listener])
  }

  public removeListener(event: string, listener: CallableFunction): void {
    const listeners = this._listeners.get(event)
    listeners?.splice(listeners.indexOf(listener))
  }

  public removeListeners(event: string): void {
    this._listeners.delete(event)
  }

  public removeAllListeners(): void {
    this._listeners.clear()
  }

  public envokeEvent(event: string, ...args: unknown[]): void {
    this._listeners.get(event)?.forEach((listener) => {
      listener(...args)
    })
  }

  public listeners(event: string): CallableFunction[] | undefined {
    return this._listeners.get(event)
  }

  public listenerCount(event: string): number {
    return this._listeners.get(event)?.length ?? 0
  }

  public getMaxListeners = () => this.max
  public setMaxListeners(n: number): void {
    this.max = n
  }

  // Abstracted Methods
  public on(event: string, listener: CallableFunction) {
    this.addListener(event, listener)
  }

  public off(event: string, listener: CallableFunction) {
    this.removeListener(event, listener)
  }

  public emit(event: string, ...args: unknown[]) {
    this.envokeEvent(event, ...args)
  }

  public once(event: string, listener: CallableFunction): void {
    const newListener = (...args: unknown[]) => {
      listener(...args)
      this.removeListener(event, newListener)
    }
    this.addListener(event, newListener)
  }

  public send(event: string, ...content: unknown[]): void {
    process.send!({
      payload: 'DJSeed::IPC_Broadcast_Event',
      data: {
        event,
        content: content,
      },
    })
  }

  public sendTo(cluster: number, event: string, ...content: unknown[]): void {
    process.send!({
      payload: 'DJSeed::IPC_Send_To_Event',
      cluster,
      data: {
        event,
        content: content,
      },
    })
  }
}
