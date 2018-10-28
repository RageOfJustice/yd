import { all, call } from 'redux-saga/effects'
import auth from './auth'
import disk from './disk'

export default function*() {
  yield all([call(auth), call(disk)])
}
