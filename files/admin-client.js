import createClient from 'monsterr'

let options = {
  canvasBackgroundColor: 'red',
  htmlContainerHeight: 0.8
}

let events = {}
let commands = {}

createClient({
  events,
  commands,
  options
  // no need to add stages to admin
})
