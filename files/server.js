import { createServer, Network } from 'monsterr'

let commands = {
  'init': function (monsterr, client, args) {
    console.log('Received init message from client')
    console.log(monsterr.send('abe', { fisk: 'hund' }))
    monsterr.send('initialize', {N: 2}).toAll()
  }
}

let events = {
  '_msg': function (monsterr, client, data) {
    monsterr.log(data, {'client_id': client.id})
    console.log('Received chat message from client')
  }
}

const monsterr = createServer({
  network: Network.solo(16),
  commands,
  events
})

monsterr.run()
