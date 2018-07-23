const INITIAL_STATE = {
  nameSong: null,
  tracks: null,
  trackSound: null,
  error: null
};

function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_SONG":
      return {
        tracks: [],
        error: null,
        nameSong: action.payload.nameSong
      };
    case "SEARCH_TRACK_SUCCESS":
      return {
        ...state,
        tracks: action.payload.tracks
      };
    case "SEARCH_TRACK_ERROR":
      return {
        ...state,
        error: action.payload.error
      };
    case "SELECTED_TRACK":
      return {
        ...state,
        trackSound: action.payload.trackSound
      };
    default: {
      return state;
    }
  }
}

export default course;
