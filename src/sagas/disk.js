import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import {
  REQUEST_METADATA,
  REQUEST_DISK_DATA,
  REQUEST_REMOVE_FILE,
  requestMetadata,
  requestDiskData,
  receiveDiskData,
  receiveMetadata,
  receiveRemoveFile,
} from '../actions'
import { getAuthToken, getCurrentDirectory } from '../selectors'
import { getDiskInfo, getMetadata, removeFile } from '../managers'

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
  path = path.replace(/^\/disk\/?/, '')
  try {
    data = yield call(getMetadata, { token: token.accessToken, path })
  } catch (error) {
    data = { error: true, errorObj: error }
  }
  yield put(receiveMetadata(data))
}

function* removeFileSaga({ payload: path }) {
  const token = yield select(getAuthToken)
  const { path: currentPath } = yield select(getCurrentDirectory)
  let data
  path = path.replace(/^\/disk\/?/, '')
  try {
    data = yield call(removeFile, { token: token.accessToken, path })
    yield all([put(requestDiskData(), requestMetadata(currentPath))])
  } catch (error) {
    data = { error: true, errorObj: error }
  }
  yield put(receiveRemoveFile(data))
}

export default function*() {
  yield all([
    takeLatest(REQUEST_METADATA, metadataSaga),
    takeLatest(REQUEST_DISK_DATA, diskInfoSaga),
    takeLatest(REQUEST_REMOVE_FILE, removeFileSaga),
  ])
}
