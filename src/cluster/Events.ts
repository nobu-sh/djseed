import type { ClusterEvents, Awaitable, ProcessEventPartials } from '../types'
import { EventEmitter } from 'events'

export interface ClusterEventEmitter {
  on<K extends keyof ClusterEvents>(event: K, listener: (...args: ClusterEvents[K]) => Awaitable<void>): this
  on<S extends string | symbol>(
    event: Exclude<S, keyof ClusterEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  once<K extends keyof ClusterEvents>(event: K, listener: (...args: ClusterEvents[K]) => Awaitable<void>): this
  once<S extends string | symbol>(
    event: Exclude<S, keyof ClusterEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  emit<K extends keyof ClusterEvents>(event: K, ...args: ClusterEvents[K]): boolean
  emit<S extends string | symbol>(event: Exclude<S, keyof ClusterEvents>, ...args: unknown[]): boolean

  off<K extends keyof ClusterEvents>(event: K, listener: (...args: ClusterEvents[K]) => Awaitable<void>): this
  off<S extends string | symbol>(
    event: Exclude<S, keyof ClusterEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  removeAllListeners<K extends keyof ClusterEvents>(event?: K): this
  removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClusterEvents>): this
}

// We need to override ClusterEvents to add
// typings to all the events.
// eslint-disable-next-line no-redeclare
export class ClusterEventEmitter extends EventEmitter {
  public constructor() {
    super()

    process.on('message', (msg: ProcessEventPartials) => {
      if (!msg.payload) return
      this.emit(msg.payload, msg.data)
    })
  }
}
