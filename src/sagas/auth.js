import { all, put, takeLatest } from 'redux-saga/effects'
import { RECEIVE_TOKEN, setToken } from '../actions'
import { parseHash } from '../utils'

function* receiveTokenSaga({ payload: hash }) {
  const tokenObject = parseHash(hash)
  if (!tokenObject.error) {
    yield put(setToken(tokenObject))
  }
  // TODO: add error handler
}

export default function*() {
  yield all([takeLatest(RECEIVE_TOKEN, receiveTokenSaga)])
}
