import { Client as DJSClient } from 'discord.js'
import type { ClientOptions as DJSClientOptions } from 'discord.js'
import { ClusterPartial } from '../cluster/ClusterPartial'
import { createRange } from '../utils/createRange'

export interface ClientOptions extends DJSClientOptions {} // Nothing Here Yet :)

export class Client extends DJSClient {
  public readonly _token: string
  public _options: ClientOptions
  public readonly cluster: ClusterPartial | undefined = undefined

  public constructor(token: string, options: ClientOptions) {
    super(options)

    this._options = this.options
    this._token = token

    if (process.env['DJSeed::Cluster_Util_Enabled']) {
      this.cluster = new ClusterPartial(this)
      this.cluster.start()
      this.options = Object.assign(this.options, {
        shardCount: this.cluster.totalShards,
        shards: createRange(this.cluster.firstShard, this.cluster.lastShard),
      })
    }
  }

  public override login(): Promise<string> {
    this.options = this._options

    return super.login(this._token)
  }
}
