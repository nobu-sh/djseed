import type { Client } from '../client/Client'

export interface UncaughtProcError {
  name: string
  message: string
  stack: string
}

export interface ProcessEventPartials {
  payload: string
  data?: object
  cluster?: number
}

export interface BroadcastEvalResponse<T> {
  id: number
  shards: number[]
  result: T
  error: any
}

export interface BroadcastEvalEvent extends ProcessEventPartials {
  data: {
    callback: string
    references?: Record<string, unknown>
  }
}

export type BroadcastEvalCallback = (client: Client) => any

export interface Payloads {
  [key: string]: (...args: any[]) => void | Promise<void>
}

export interface ShardStats {
  id: number
  status: number
  latency: number
}

export interface ClusterMem {
  rss: number
  heapTotal: number
  heapUsed: number
  external: number
  arrayBuffers: number
}

export interface ClusterStats {
  id: number
  guilds: number
  users: number
  uptime: number | null
  mem: ClusterMem
  shards: ShardStats[]
  largeGuilds: number
  exclusiveGuilds: number
}
