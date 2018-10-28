import * as R from 'ramda'
import axios from 'axios'
import { getYDHeaders, createURL } from '../api'

export const getDiskInfo = token =>
  axios
    .get(createURL('disk'), { headers: getYDHeaders(token) })
    .then(R.prop('data'))
