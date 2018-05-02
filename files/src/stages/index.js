import { Stages } from 'monsterr'

import stage1 from './stage1'

export default [
  stage1,
  Stages.repeat(stage1, 3)
]