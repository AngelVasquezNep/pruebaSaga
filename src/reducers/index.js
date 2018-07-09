import {combineReducers} from 'redux'
import tracks from './tracks'
import sauce from './sauce'

const rootReducer = combineReducers({
  tracks,
  sauce
})

export default rootReducer