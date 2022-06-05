import type { ClusterEvents, CommonError } from '.'

export interface ClusterUtilEvents extends ClusterEvents {
  /**
   * Sent on cluster util info.
   */
  Cluster_Util_Info: [string]
  /**
   * Sent when shit hits the fan.
   */
  Cluster_Util_Error: [Cluster_Util_Error]
}

export interface Cluster_Util_Error {
  type: string
  error: CommonError
}
