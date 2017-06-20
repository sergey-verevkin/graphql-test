import { combineReducers } from 'redux'

import user from './User'
import messages from './Messages'

export default combineReducers({
  user,
  messages
})
