import * as R from 'ramda'
import { all, put, takeLatest } from 'redux-saga/effects'
import { RECEIVE_TOKEN, setToken } from '../actions'
import { parseHash, renameKeys } from '../utils'

function* receiveTokenSaga({ payload: hash }) {
  const tokenObject = R.pipe(
    parseHash,
    renameKeys({
      access_token: 'accessToken',
      token_type: 'tokenType',
      expires_in: 'expiresIn',
    }),
  )(hash)
  if (!tokenObject.error) {
    yield put(setToken(tokenObject))
  }
  // TODO: add error handler
}

export default function*() {
  yield all([takeLatest(RECEIVE_TOKEN, receiveTokenSaga)])
}
