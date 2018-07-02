const initialState = {
  msg: 'adios'
}

const adios = (state=initialState, action) => {
  switch (action.type) {
    case 'ADIOS': {
      return {
        msg: action.payload.msg
      }
    }
    default: {
      return state
    }
  }
}

export default adios