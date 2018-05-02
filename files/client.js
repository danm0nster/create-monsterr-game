import createClient from 'monsterr'
import stages from './src/stages'

let options = {
  canvasBackgroundColor: 'blue'
}

createClient({
  options,
  stages
})