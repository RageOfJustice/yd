import { APP_NAME } from '../constants'

export const setAuthToken = token =>
  localStorage.setItem(`@${APP_NAME}:authToken`, token)

export const getAuthToken = () => localStorage.getItem(`@${APP_NAME}:authToken`)
