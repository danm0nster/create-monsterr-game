import createServer, { Network } from 'monsterr'
import stages from './src/stages'

let events = {}
let commands = {}

const monsterr = createServer({
  network: Network.pairs(8),
  events,
  commands,
  stages
})

monsterr.run()
