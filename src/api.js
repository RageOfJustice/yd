import { getAuthToken } from './repositories'

const CLIENT_ID = 'c8df9f40beb1467f8097b0346e43564c'

const HOST = 'cloud-api.yandex.net'

const API_VERSION = 'v1'

export const createURL = suffix => `${HOST}/${API_VERSION}/${suffix}`

export const getYDHeaders = () => {
  const token = getAuthToken()
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }
  return token ? { ...headers, Authorization: `OAuth ${token}` } : headers
}
