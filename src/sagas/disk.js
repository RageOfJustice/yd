import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import { REQUEST_DISK_DATA, receiveDiskData } from '../actions'
import { getAuthToken } from '../selectors'
import { getDiskInfo } from '../managers'

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

export default function*() {
  yield all([takeLatest(REQUEST_DISK_DATA, diskInfoSaga)])
}
