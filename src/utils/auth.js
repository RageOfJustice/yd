// @flow
import { APP_NAME } from '../constants'

export const createActionName = (prefix, name) =>
  `${APP_NAME}/${prefix}/${name}`
