import {createActions, createReducer} from 'reduxsauce'

const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  items: []
}

const {Types, Creators} = createActions({
  fetchTrackRequest: ['query'],
  fetchTrackSuccess: ['tracks'],
  fetchTrackFailure: [] 
},{prefix: 'TRACKS_'})

const fetchTrackRequest = (state=INITIAL_STATE, {query}) => {
  return {
    loading: true,
    success: false,
    error: false,
    items: []
  }
}
const fetchTrackSuccess = (state=INITIAL_STATE, {tracks}) => {
  return {
    loading: false,
    success: true,
    error: false,
    items: [...tracks]
  }
}
const fetchTrackFailure = (state=INITIAL_STATE, {error}) => {
  return {
    loading: false,
    success: false,
    error: true,
    items: []
  }
}

const HANDLERS = {
  [Types.FETCH_TRACK_REQUEST]: fetchTrackRequest,
  [Types.FETCH_TRACK_SUCCESS]: fetchTrackSuccess,
  [Types.FETCH_TRACK_FAILURE]: fetchTrackFailure
}

export const tracksActionsCreate = Creators
export const tracksActionsTypes = Types

export default createReducer(INITIAL_STATE, HANDLERS)