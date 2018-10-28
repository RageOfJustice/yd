// must be in process.env
const CLIENT_ID = 'c8df9f40beb1467f8097b0346e43564c'

export const OAuthRequestURL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${CLIENT_ID}`

const HOST = 'cloud-api.yandex.net'

const API_VERSION = 'v1'

export const createURL = suffix => `https://${HOST}/${API_VERSION}/${suffix}`

export const getYDHeaders = token => {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }
  return token ? { ...headers, Authorization: `OAuth ${token}` } : headers
}
