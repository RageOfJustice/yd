import { createAction } from 'redux-actions'
import { createActionName } from '../utils'

const prefix = 'disk'

export const REQUEST_METADATA = createActionName(prefix, 'REQUEST_METADATA')
export const requestMetadata = createAction(REQUEST_METADATA)

export const RECEIVE_METADATA = createActionName(prefix, 'RECEIVE_METADATA')
export const receiveMetadata = createAction(RECEIVE_METADATA)

export const REQUEST_DISK_DATA = createActionName(prefix, 'REQUEST_DISK_DATA')
export const requestDiskData = createAction(REQUEST_DISK_DATA)

export const RECEIVE_DISK_DATA = createActionName(prefix, 'RECEIVE_DISK_DATA')
export const receiveDiskData = createAction(RECEIVE_DISK_DATA)

export const REQUEST_REMOVE_FILE = createActionName(
  prefix,
  'REQUEST_REMOVE_FILE',
)
export const requestRemoveFile = createAction(REQUEST_REMOVE_FILE)

export const RECEIVE_REMOVE_FILE = createActionName(
  prefix,
  'RECEIVE_REMOVE_FILE',
)
export const receiveRemoveFile = createAction(RECEIVE_REMOVE_FILE)
