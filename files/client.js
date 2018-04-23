/* globals fabric */ // <- eslint recognizes that fabric is defined

import { createClient } from 'monsterr'

let options = {
  canvasBackgroundColor: 'blue'
}

let playerList = [] // Initially empty

// Make a simple command to initialize all clients
let commands = {
  'init': function (monsterr) {
    const circle = new fabric.Circle({
      radius: 20, fill: 'red', left: 100, top: 100, hasControls: false
    })
    // Draw red circle to test that this gets executed. It does
    monsterr.canvas.add(circle)
    // Should send 'init' command to the server
  }
}

let events = {
  'initialize': (monsterr, data) => {
    // Remove existing player sprites, if any
    for (let i = 0; i < playerList.length; i++) {
      monsterr.canvas.remove(playerList[i])
    }
    playerList = []
    for (let i = 0; i < data.N; i++) {
      playerList.push(new fabric.Circle({radius: 20, fill: 'green', left: 100 * 2 * i, top: 100, hasControls: false}))
      monsterr.canvas.add(playerList[playerList.length - 1])
    }

    monsterr.canvas.renderAll()
  }
}

const monsterr = createClient({
  options,
  commands,
  events
})
