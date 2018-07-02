import { delay } from 'redux-saga'
import { put, call, all, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(3000)
  // console.log("HOLA ASYNC DESDE SAGAS")
  yield put({ type: 'HOLA_ASYNC', payload: {msg: 'HOLA DESDE SAGAS'} })
}

export function* holaSaga () {
  yield console.log("Hola Init Saga")
}
export function* hola () {
  yield delay(1000)
  yield console.log("Hola Saga")
}
export function* adios () {
  yield delay(1000)
  yield console.log("Adios Saga")
}

function* watchIncrementAsync() {
  yield takeEvery('HOLA_ASYNC_SAGA', incrementAsync)
  yield takeEvery('HOLA', hola)
  yield takeEvery('ADIOS', adios)
  yield takeEvery('FETCH_SAGA', fetchSaga)
}

const fetchMusic = ({url}) => {
  return fetch(url)
  .then(res => res.json())
}

const urlData = "https://platzi-music-api.now.sh/search?type=track&query=Despacito"

function* fetchSaga () {
  try {
    const response = yield call(fetchMusic, {url: urlData})
    yield put({type: 'TRACKS_FETCH', response})
  }
  catch(err) {
    console.log(err)
  }
}

export default function* rootSaga () {
  yield all([
    holaSaga(),
    watchIncrementAsync()
  ])
}