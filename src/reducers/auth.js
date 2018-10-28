import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { SET_TOKEN, LOGOUT } from '../actions'

const token = handleActions(
  {
    [SET_TOKEN]: (_, { payload }) => payload,
    [LOGOUT]: R.always(null),
  },
  // null,
  { accessToken: 'AQAAAAAUHXKGAAVCr4xogLrcGkWnisaa7gPa3kI', expiresIn: 1 },
)

export default combineReducers({ token })
