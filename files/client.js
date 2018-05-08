import createClient from 'monsterr'
import stages from './src/stages'

let options = {
  canvasBackgroundColor: 'blue',
  htmlContainerHeight: 0 // Hide html
}

let events = {}
let commands = {}

createClient({
  events,
  commands,
  options,
  stages
})