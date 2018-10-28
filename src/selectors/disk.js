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

export const getMetadata = R.pipe(
  getDiskState,
  R.prop('metadata'),
)

export const getIsFetchingMetadata = R.pipe(
  getDiskState,
  R.prop('isFetchingMetadata'),
)
