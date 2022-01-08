import type { CloseEvent } from 'discord.js'
import type { CommonError } from '.'

export interface ClusterEvents {
  /**
   * Sent when a cluster encounters an error.
   */
  'DJSeed::Cluster_Error': [Cluster_Error]
  /**
   * Sent when a cluster came close to having an error.
   */
  'DJSeed::Cluster_Warn': [Cluster_Warn]
  /**
   * Sent when a shard becomes ready.
   */
  'DJSeed::Shard_Ready': [Shard_Ready]
  /**
   * Sent when a shard has resumed successfully.
   */
  'DJSeed::Shard_Resume': [Shard_Resume]
  /**
   * Sent when a shard it attempting to reconnect to Discord gateway.
   */
  'DJSeed::Shard_Reconnecting': [Shard_Reconnecting]
  /**
   * Send when a shard has disconnected for Discord gateway.
   */
  'DJSeed::Shard_Disconnect': [Shard_Disconnect]
  /**
   * Sent when a shard encounters an error.
   */
  'DJSeed::Shard_Error': [Shard_Error]
  /**
   * Sent when a cluster has become ready.
   */
  'DJSeed::Cluster_Ready': [Cluster_Ready]
}

export interface Cluster_Error {
  id: number
  shards: number[]
  type: string
  error: CommonError
}

export interface Cluster_Warn {
  id: number
  shards: number[]
  type: string
  message: string
}

export interface Shard_Ready {
  id: number
  shards: number[]
  type: string
  shard: number
  unavailabledGuilds: Set<string> | undefined
}

export interface Shard_Resume {
  id: number
  shards: number[]
  type: string
  shard: number
  replayedEvents: number
}

export interface Shard_Reconnecting {
  id: number
  shards: number[]
  type: string
  shard: number
}

export interface Shard_Disconnect {
  id: number
  shards: number[]
  type: string
  shard: number
  closeEvent: CloseEvent
}

export interface Shard_Error {
  id: number
  shards: number[]
  type: string
  shard: number
  error: CommonError
}

export interface Cluster_Ready {
  id: number
  shards: number[]
  type: string
}
