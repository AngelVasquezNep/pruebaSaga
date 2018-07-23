import { put, call, takeLatest } from "redux-saga/effects";
import { apiMusic } from "../services";

function* fetchTrackRequest({ query }) {
  const response = yield call(apiMusic, { query });
  if (response) {
    yield put({
      type: "SEARCH_TRACK_SUCCESS",
      payload: { tracks: response.tracks.items }
    });
  } else {
    yield put({
      type: "SEARCH_TRACK_ERROR",
      payload: { error: "Fallamos" }
    });
  }
}

export default function* rootSaga() {
  yield takeLatest("SEARCH_SONG", fetchTrackRequest);
}
