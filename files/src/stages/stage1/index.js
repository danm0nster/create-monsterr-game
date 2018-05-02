import serverSide from './server'
import clientSide from './client'

let stage = {
  serverSide,
  clientSide,
  options: {
    duration: 10000 // 10s
  }
}

export default stage
