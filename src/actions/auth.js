import { createAction } from 'redux-actions'
import { createActionName } from '../utils'

const prefix = 'auth'

export const RECEIVE_TOKEN = createActionName(prefix, 'RECEIVE_TOKEN')
export const receiveToken = createAction(RECEIVE_TOKEN)

export const SET_TOKEN = createActionName(prefix, 'SET_TOKEN')
export const setToken = createAction(SET_TOKEN)

export const LOGOUT = createActionName(prefix, 'LOGOUT')
export const logout = createAction(LOGOUT)
