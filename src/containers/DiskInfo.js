import * as R from 'ramda'
import { connect } from 'react-redux'
import { DiskInfo } from '../components'
import { getDiskInfo, getIsFetchingDiskInfo } from '../selectors'

const mapStateToProps = R.applySpec({
  diskInfo: getDiskInfo,
  isFetching: getIsFetchingDiskInfo,
})

export default connect(mapStateToProps)(DiskInfo)
