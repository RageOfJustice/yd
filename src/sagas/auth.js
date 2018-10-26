import { all, put, takeLatest } from 'redux-saga/effects'
import { RESTORE_TOKEN, setToken } from '../actions'
import { getAuthToken } from '../repositories'

function* restoreTokenSaga() {
  const token = getAuthToken()
  if (token) {
    yield put(setToken(token))
  }
}

export default function*() {
  yield all([takeLatest(RESTORE_TOKEN, restoreTokenSaga)])
}
