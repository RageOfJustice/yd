import { all, put, takeLatest } from 'redux-saga/effects'
import { RECEIVE_TOKEN, RESTORE_TOKEN, setToken } from '../actions'
import { getAuthToken } from '../repositories'
import { parseHash } from '../utils'

function* restoreTokenSaga() {
  const token = getAuthToken()
  if (token) {
    yield put(setToken(token))
  }
}

function* receiveTokenSaga({ payload: hash }) {
  const tokenObject = parseHash(hash)
  if (!tokenObject.error) {
    yield put(setToken(tokenObject))
  }
  // TODO: add error handler
}

export default function*() {
  yield all([
    takeLatest(RESTORE_TOKEN, restoreTokenSaga),
    takeLatest(RECEIVE_TOKEN, receiveTokenSaga),
  ])
}
