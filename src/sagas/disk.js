import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import {
  REQUEST_DISK_DATA,
  REQUEST_METADATA,
  receiveDiskData,
  receiveMetadata,
} from '../actions'
import { getAuthToken } from '../selectors'
import { getDiskInfo, getMetadata } from '../managers'

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

function* metadataSaga() {
  const token = yield select(getAuthToken)
  let data
  try {
    data = yield call(getMetadata, { token: token.accessToken })
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
