import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { Header } from '../components'
import { DiskInfoContainer as DiskInfo } from '../containers'
import { getIsAuthorized } from '../selectors'
import { requestDiskData, requestMetadata } from '../actions'

class Disk extends React.Component {
  componentDidMount() {
    this.props.requestDiskData()
    this.props.requestMetadata()
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <aside className="col-3">
              <DiskInfo />
            </aside>
            <main className="col-6">table of contents</main>
            <aside className="col-3">preview</aside>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = R.applySpec({ isAuthorized: getIsAuthorized })

const mapDispatchToProps = {
  requestDiskData,
  requestMetadata,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disk)
