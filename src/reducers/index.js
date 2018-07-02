import {combineReducers} from 'redux'
import hola from './hola'
import adios from './adios'
import tracks from './tracks'

const rootReducer = combineReducers({
  hola,
  adios,
  tracks
})

export default rootReducer