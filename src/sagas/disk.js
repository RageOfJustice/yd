import * as R from 'ramda'
import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import {
  REQUEST_DISK_DATA,
  REQUEST_METADATA,
  receiveDiskData,
  receiveMetadata,
} from '../actions'
import { getAuthToken } from '../selectors'
import { getDiskInfo, getMetadata } from '../managers'
import { createTree } from '../utils'

function* diskInfoSaga() {
  const token = yield select(getAuthToken)
  let data
  try {
    data = yield call(getDiskInfo, token.accessToken)
  } catch (error) {
    data = { error: true, errorObj: error }
  }
  yield put(receiveDiskData(data))
}

function* metadataSaga({ payload: path }) {
  const token = yield select(getAuthToken)
  let data
  try {
    data = yield call(getMetadata, { token: token.accessToken, path })
    data = R.evolve({ _embedded: { items: createTree } }, data)
  } catch (error) {
    data = { error: true, errorObj: error }
  }
  yield put(receiveMetadata(data))
}

export default function*() {
  yield all([
    takeLatest(REQUEST_METADATA, metadataSaga),
    takeLatest(REQUEST_DISK_DATA, diskInfoSaga),
  ])
}
