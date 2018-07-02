const initialState = []

const tracks = (state=initialState, action) => {
  switch (action.type) {
    case 'TRACKS_FETCH': {
      return [...action.response.tracks.items]
    }
    default: {
      return state
    }
  }
}

export default tracks