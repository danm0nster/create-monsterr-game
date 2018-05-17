import createServer, { Network } from 'monsterr'
import stage1 from './src/stages/stage1/server'

const stages = [stage1]

let events = {}
let commands = {}

const monsterr = createServer({
  network: Network.pairs(8),
  events,
  commands,
  stages
})

monsterr.run()
