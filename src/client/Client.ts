import { Client as DJSClient } from 'discord.js'
import { ClusterPartial } from '../cluster/ClusterPartial'
import { createRange } from '../utils/createRange'
import type { ClientOptions, ClientEvents, Awaitable } from '../types'

// Interface to override events interface
export interface Client {
  on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this
  on<S extends string | symbol>(
    event: Exclude<S, keyof ClientEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this
  once<S extends string | symbol>(
    event: Exclude<S, keyof ClientEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean
  emit<S extends string | symbol>(event: Exclude<S, keyof ClientEvents>, ...args: unknown[]): boolean

  off<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this
  off<S extends string | symbol>(
    event: Exclude<S, keyof ClientEvents>,
    listener: (...args: any[]) => Awaitable<void>,
  ): this

  removeAllListeners<K extends keyof ClientEvents>(event?: K): this
  removeAllListeners<S extends string | symbol>(event?: Exclude<S, keyof ClientEvents>): this
}

// We need to override Client to add new
// events to the event emitter.
// eslint-disable-next-line no-redeclare
export class Client extends DJSClient {
  /**
   * Client Token
   */
  public readonly _token: string
  /**
   * DJSeed Client Options
   */
  public _options: ClientOptions
  /**
   * Cluster object. Will only be available when using ClusterUtil
   */
  public readonly cluster: ClusterPartial | undefined = undefined

  public constructor(token: string, options: ClientOptions) {
    super(options)

    this._options = this.options
    this._token = token

    if (process.env['DJSeed::Cluster_Util_Enabled']) {
      this.cluster = new ClusterPartial(this)

      // If current proc is not a child, define process.send as an emit instead
      const noop = (..._: any[]): boolean => {
        const item = _[0]
        if (!item || !item.payload) return false
        return this.cluster!.events.emit(item.payload as string, item.data ?? {})
      }
      process.send = process.send ?? noop

      // Start Clusterer and update client options
      this.cluster.start()
      this.options = Object.assign(this.options, {
        shardCount: this.cluster.totalShards,
        shards: createRange(this.cluster.firstShard, this.cluster.lastShard),
      })
    }
  }

  /**
   * Connect client to Gateway.
   */
  public override login(): Promise<string> {
    this.options = this._options

    return super.login(this._token)
  }
}
