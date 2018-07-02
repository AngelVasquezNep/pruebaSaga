export const hola_action = (msg) => ({ 
  type: 'HOLA', 
  payload: {
    msg: 'HOLA DESDE ACTION'
  }
})
export const adios_action = (msg) => ({ 
  type: 'ADIOS', 
  payload: {
    msg: 'ADIOS DESDE ACTION'
  }
})
export const hola_async = (msg) => ({ 
  type: 'HOLA_ASYNC_SAGA', 
  payload: {
    msg: 'HOLA ASYNC SAGA'
  }
})
export const fetch_saga = () => ({ 
  type: 'FETCH_SAGA'
})
