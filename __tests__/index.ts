import { config } from 'dotenv'
config()

// Tests
import { run as runBasicClientTest } from './client_basic'
import { run as runClusterMockTest } from './cluster_mock'

// Main
async function init(): Promise<void> {
  // We use Jest because I dont want to
  // write a bunch of mock servers for DJS
  console.log('Budget Jest (Made In China).\n  Kid: Mommm I want Jest :(\n  Mom: No we have Jest at home :/\n\n')
  console.log(`Beginning Tests...\n`)

  const a = await runBasicClientTest()
  console.log(`${a}\n`)

  const b = await runClusterMockTest()
  console.log(`${b}\n`)
}

init()
  .then(() => console.log('Tests Finished!\n\n'))
  .catch((err) => console.error('Tests Failed:\n', err))
