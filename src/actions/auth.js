import { createAction } from 'redux-actions'
import { createActionName } from '../utils'

const prefix = 'auth'

export const REQUEST_AUTH = createActionName(prefix, 'REQUEST_AUTH')
export const requestAuth = createAction(REQUEST_AUTH)

export const RECEIVE_AUTH = createActionName(prefix, 'RECEIVE_AUTH')
export const receiveAuth = createAction(RECEIVE_AUTH)

export const RESTORE_TOKEN = createActionName(prefix, 'RESTORE_TOKEN')
export const restoreToken = createAction(RESTORE_TOKEN)
