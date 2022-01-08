import { Client, Intents } from '../src'

export async function run(): Promise<string> {
  console.log('Running Basic Client Test')
  return new Promise((r, j) => {
    const bot = new Client(process.env.TOKEN ?? '', { intents: [Intents.FLAGS.GUILDS] })

    bot.once('ready', () => {
      if (!bot.isReady()) {
        j(`Expected Client To Be Ready, Instead Recieved: false`)
      }
      if (bot.cluster) {
        bot.destroy()
        j(`Expected Client To NOT Have A Cluster Instance, Instead Had One.`)
      }
      bot.destroy()
      r('Test Passed!')
    })

    bot.on('shardError', (err) => {
      bot.destroy()
      j(`Expected Websocket Connection, Recieved Error:\n${String(err)}`)
    })

    bot.on('error', (err) => {
      bot.destroy()
      j(`Expected No Errors, Received:\n${String(err)}`)
    })

    bot.login().catch((err) => {
      bot.destroy()
      j(`Expected Login, Recieved Error:\n${String(err)}`)
    })
  })
}
