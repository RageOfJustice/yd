import { APP_NAME } from '../constants'

export const setAuthToken = token =>
  localStorage.setItem(`@${APP_NAME}:authToken`, JSON.stringify(token))

export const getAuthToken = () => {
  const token = localStorage.getItem(`@${APP_NAME}:authToken`)
  return token && JSON.parse(token)
}
