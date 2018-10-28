import { combineReducers } from 'redux'
import auth from './auth'
import disk from './disk'

export default combineReducers({ auth, disk })
