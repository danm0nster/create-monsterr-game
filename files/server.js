import createServer, { Network } from 'monsterr'
import stages from './src/stages'

const monsterr = createServer({
  network: Network.pairs(8),
  stages
})

monsterr.run()
