const initialState = {
  msg: 'hola'
}

const hola = (state=initialState, action) => {
  switch (action.type) {
    case 'HOLA': {
      return {
        msg: action.payload.msg
      }
    }
    case 'HOLA_ASYNC': {
      return {
        msg: action.payload.msg
      }
    }
    default: {
      return state
    }
  }
}

export default hola