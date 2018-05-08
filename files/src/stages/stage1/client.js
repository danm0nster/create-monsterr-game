/* globals fabric */

export default {
  commands: {
    finish (monsterr) {
      monsterr.stageFinished() // <== this is how a client reports finished
      return false
    }
  },
  setup: (monsterr) => {
    monsterr.getCanvas().add(...['green', 'red', 'yello'].map(fill => new fabric.Triangle({
      width: 50, height: 50, fill, left: Math.random() * 200, top: Math.random() * 500
    })))
    // Handle button event
    $('#stage1-button').mouseup(e => {
      e.preventDefault() // Stop button from doing anything else it might have done
      $('#stage1-title').html($('#stage1-input').val())
    })
  },
  teardown (monsterr) {
    $('#stage1-button').off() // remove all event handlers
  }
}