import { all, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_AUTH, RESTORE_TOKEN, setToken } from '../actions'
import { getAuthToken } from '../repositories'

function* restoreTokenSaga() {
  const token = getAuthToken()
  if (token) {
    yield put(setToken(token))
  }
}

function* requestAuthSaga() {}

export default function*() {
  yield all([
    takeLatest(RESTORE_TOKEN, restoreTokenSaga),
    takeLatest(REQUEST_AUTH, requestAuthSaga),
  ])
}
