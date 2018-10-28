import * as R from 'ramda'

export const getDiskState = R.prop('disk')

export const getDiskInfo = R.pipe(
  getDiskState,
  R.prop('diskInfo'),
)

export const getIsFetchingDiskInfo = R.pipe(
  getDiskState,
  R.prop('isFetchingDiskInfo'),
)
