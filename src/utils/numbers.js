import { BYTE_FORMATS } from '../constants'

export const formatBytes = (bytes, formatter = BYTE_FORMATS.MB) => {
  let divider = 1024 * 1024

  if (formatter === BYTE_FORMATS.KB) {
    divider = 1024
  } else if (formatter === BYTE_FORMATS.GB) {
    divider = 1024 * 1024 * 1024
  }

  return Math.round((bytes / divider) * 100) / 100
}
