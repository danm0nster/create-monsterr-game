/* globals fabric */

export default {
  commands: {
    finish (monsterr) {
      monsterr.stageFinished() // <== this is how a client reports finished
      return false
    }
  },
  setup: (monsterr) => {
    monsterr.canvas.add(...['green', 'red', 'yello'].map(fill => new fabric.Triangle({
      width: 50, height: 50, fill, left: Math.random() * 200, top: Math.random() * 500
    })))
  },
  teardown (monsterr) {
    console.log('cleaning up')
  }
}
