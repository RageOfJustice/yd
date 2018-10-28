import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  REQUEST_REMOVE_FILE,
  RECEIVE_REMOVE_FILE,
  REQUEST_DISK_DATA,
  RECEIVE_DISK_DATA,
  REQUEST_METADATA,
  RECEIVE_METADATA,
  LOGOUT,
} from '../actions'

const diskInfo = handleActions(
  {
    [RECEIVE_DISK_DATA]: (_, { payload }) => payload,
    [LOGOUT]: R.always({}),
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

const metadata = handleActions(
  {
    [RECEIVE_METADATA]: (_, { payload }) => payload,
    [LOGOUT]: R.always({}),
  },
  {},
)

const isFetchingMetadata = handleActions(
  {
    [RECEIVE_METADATA]: R.F,
    [REQUEST_METADATA]: R.T,
  },
  false,
)

const isFetchingRemoveFile = handleActions(
  {
    [RECEIVE_REMOVE_FILE]: R.F,
    [REQUEST_REMOVE_FILE]: R.T,
  },
  false,
)

export default combineReducers({
  diskInfo,
  metadata,
  isFetchingDiskInfo,
  isFetchingMetadata,
  isFetchingRemoveFile,
})
