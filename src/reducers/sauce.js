import {createActions, createReducer} from 'reduxsauce'

const INITIAL_STATE = {
  msg: 'HOLA_SAUCE'
}

const { Types, Creators } = createActions({
  reduxSauce: ['data']
}, {prefix: 'SAUCE_'})

const reduxSauce = (state=INITIAL_STATE, {data}) => {
  console.log('Data desde reducer: ', data)
  return {
    msg: data
  }
}

const HANDLERS = {
  [Types.REDUX_SAUCE]: reduxSauce
}

export const sauceActionsCreate = Creators
export const sauceActionsType = Types

export default createReducer(INITIAL_STATE, HANDLERS)