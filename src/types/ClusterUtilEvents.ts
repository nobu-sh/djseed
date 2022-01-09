import type { ClusterEvents, CommonError } from '.'

export interface ClusterUtilEvents extends ClusterEvents {
  /**
   * Sent on cluster util info.
   */
  'DJSeed::Cluster_Util_Info': [string]
  /**
   * Sent when shit hits the fan.
   */
  'DJSeed::Error': [Util_Error]
  /**
   * Sent when a cluster dies.
   */
  'DJSeed::Cluster_Death': [Cluster_Death]
}

export interface Util_Error {
  type: string
  error: CommonError
}

export interface Cluster_Death {
  id: number
  shards: number[]
  type: string
  message: string
  code: number
  signal: string
}
