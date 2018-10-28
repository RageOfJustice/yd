import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  REQUEST_DISK_DATA,
  RECEIVE_DISK_DATA,
  REQUEST_METADATA,
  RECEIVE_METADATA,
  LOGOUT,
} from '../actions'

const diskInfo = handleActions(
  {
    [RECEIVE_DISK_DATA]: (_, { payload }) => payload,
    [LOGOUT]: R.always(null),
  },
  {},
)

const isFetchingDiskInfo = handleActions(
  {
    [RECEIVE_DISK_DATA]: R.F,
    [REQUEST_DISK_DATA]: R.T,
  },
  false,
)

export default combineReducers({
  diskInfo,
  isFetchingDiskInfo,
})
