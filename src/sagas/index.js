import { delay } from "redux-saga";
// import { put, call, all, takeEvery, takeLatest } from 'redux-saga/effects'
import { put, call, takeLatest } from "redux-saga/effects";
import { tracksActionsTypes, tracksActionsCreate } from "../reducers/tracks";

export function* incrementAsync() {
  yield delay(3000);
  yield put({ type: "HOLA_ASYNC", payload: { msg: "HOLA DESDE SAGAS" } });
}
export function* holaSaga() {
  yield console.log("Hola Init Saga");
}
// function* watchFetchData() {
//   yield takeLatest(tracksActionsTypes.FETCH_TRACK_REQUEST, fetchTrackRequest);
// }
function* fetchTrackRequest({ query }) {
  const response = yield call(fetchMusic, { query });
  if (response.status === 200) {
    yield put(tracksActionsCreate.fetchTrackSuccess(response.items));
  } else {
    yield put(tracksActionsCreate.fetchTrackFailure());
  }
}
const fetchMusic = ({ query }) => {
  const urlData = `https://platzi-music-api.now.sh/search?type=track&query=${query}`;
  return fetch(urlData)
    .then(res => res.json())
    .then(json => ({
      items: json.tracks.items,
      status: 200
    }));
};
export default function* rootSaga() {
  yield takeLatest(tracksActionsTypes.FETCH_TRACK_REQUEST, fetchTrackRequest);
  // yield all([
  //   holaSaga(),
  //   watchFetchData()
  // ])
}
