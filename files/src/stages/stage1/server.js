
export default {
  setup: (monsterr) => {
    console.log('PREPARING SERVER FOR STAGE',
      monsterr.getStageManager().getCurrentStage())
  },
  teardown: (monsterr) => {
    console.log('CLEANUP SERVER AFTER STAGE',
      monsterr.getStageManager().getCurrentStage())
  }
}
