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

export interface BroadcastEvalResponse {
  id: number
  shards: number[]
  result: any
  error: any
}

export interface BroadcastEvalEvent extends ProcessEventPartials {
  data: {
    callback: string
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

export interface ClusterStats {
  id: number
  guilds: number
  users: number
  uptime: number | null
  ram: number
  shards: ShardStats[]
  largeGuilds: number
  exclusiveGuilds: number
}
