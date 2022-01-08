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
}

export interface Util_Error {
  type: string
  error: CommonError
}
