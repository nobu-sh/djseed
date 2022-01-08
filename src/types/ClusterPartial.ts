import type { Client } from '../client/Client'

export interface UncaughtProcError {
  name: string
  message: string
  stack: string
}

export interface ProcessEventPartials {
  payload: string
  data?: Record<string, unknown>
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
