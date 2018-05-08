import serverSide from './server'
import clientSide from './client'

import html from './stage1.html'
import './stage1.css'

let stage = {
  html,
  serverSide,
  clientSide,
  options: {
    duration: 30000, // 30s
    htmlContainerHeight: 0.5 // allocate half of screen for html fot this stage
  }
}

export default stage
