import Axios from 'axios'
import { Options } from 'discord.js'
import { HTTP } from '../Constants'

export interface BotGateway {
  url: string
  shards: number
  session_start_limit: {
    total: number
    remaining: number
    reset_after: number
    max_concurrency: number
  }
}

export async function getGateway(token: string): Promise<BotGateway> {
  const defaultOptions = Options.createDefault()
  const url = defaultOptions.rest?.api ?? HTTP.url
  const version = defaultOptions.rest?.version ?? HTTP.v
  const gateway = `${url}/v${version}/gateway/bot`

  return new Promise((res, rej) => {
    Axios({
      method: 'GET',
      url: gateway,
      headers: {
        Authorization: `Bot ${token}`,
      },
    })
      .then(({ data }) => {
        res(data as BotGateway)
      })
      .catch((err) => {
        rej(err)
      })
  })
}
