import { connect } from 'react-redux'
import { Header } from '../components'
import { logout } from '../actions'

const mapDispatchToProps = { logout }

export default connect(
  undefined,
  mapDispatchToProps,
)(Header)
