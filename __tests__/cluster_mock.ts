import { Client, GatewayIntentBits } from '../src'

export async function run(): Promise<string> {
  console.log('Running Mock Cluster Client Test')

  // Mock ENV
  process.env['DJSeed::Cluster_Util_Enabled'] = String(true)
  process.env['DJSeed::Total_Shard_Amount'] = String(2)
  process.env['DJSeed::First_Shard_Identifier'] = String(0)
  process.env['DJSeed::Last_Shard_Identifier'] = String(1)
  process.env['DJSeed::Child_Cluster_Identifier'] = String(0)
  process.env['DJSeed::Total_Child_Cluster_Amount'] = String(1)

  return new Promise((r, j) => {
    const bot = new Client(process.env.TOKEN ?? '', { intents: [GatewayIntentBits.Guilds] })

    bot.once('ready', () => {
      if (!bot.isReady()) {
        j(`Expected Client To Be Ready, Instead Recieved: false`)
      }
      if (!bot.cluster) {
        bot.destroy()
        j(`Expected Client To Have A Cluster Instance, Instead Had None.`)
      }
      console.debug(`DEBUG: Cluster ID ${String(bot.cluster?.id)}`)
      console.debug(`DEBUG: Total Clusters ${String(bot.cluster?.totalClusters)}`)
      console.debug(`DEBUG: Total Shards ${String(bot.cluster?.totalShards)}`)
      console.debug(`DEBUG: First Shard ${String(bot.cluster?.firstShard)}`)
      console.debug(`DEBUG: Last Shard ${String(bot.cluster?.lastShard)}`)
      console.debug(`DEBUG: IPC? ${bot.cluster?.ipc.getMaxListeners() ? 'true' : 'false'}`)

      bot.destroy()
      r('Test Probably Passed, View Debug Logs.')
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
