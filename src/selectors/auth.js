import * as R from 'ramda'

export const getAuthState = R.prop('auth')

export const getAuthToken = R.pipe(
  getAuthState,
  R.prop('token'),
)

export const getIsAuthorized = R.pipe(
  getAuthToken,
  tokenObject => tokenObject && tokenObject.expiresIn > 0,
)
