import * as R from 'ramda'
import { connect } from 'react-redux'
import { ProtectedRoute } from '../components'
import { getIsAuthorized } from '../selectors'

const mapStateToProps = R.applySpec({ isAuthorized: getIsAuthorized })

export default connect(mapStateToProps)(ProtectedRoute)
