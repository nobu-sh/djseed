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

export interface Cluster {
  workerId: number
  firstShard: number
  lastShard: number
}
