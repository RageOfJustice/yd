import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { Header, TableOfContents } from '../components'
import { DiskInfoContainer as DiskInfo } from '../containers'
import { getIsAuthorized, getCurrentDirectory } from '../selectors'
import { requestDiskData, requestMetadata } from '../actions'

class Disk extends React.Component {
  componentDidMount() {
    const {
      requestDiskData,
      requestMetadata,
      location: { pathname },
    } = this.props
    requestDiskData()
    requestMetadata(pathname)
  }

  componentDidUpdate({ location: { pathname: oldPathname } }) {
    const {
      requestMetadata,
      location: { pathname },
    } = this.props
    if (oldPathname !== pathname) {
      requestMetadata(pathname)
    }
  }

  render() {
    const { currentDirectory } = this.props

    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <aside className="col-3">
              <DiskInfo />
            </aside>
            <main className="col-6">
              {currentDirectory &&
                !R.isEmpty(currentDirectory) && (
                  <TableOfContents data={currentDirectory} />
                )}
            </main>
            <aside className="col-3">preview</aside>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = R.applySpec({
  isAuthorized: getIsAuthorized,
  currentDirectory: getCurrentDirectory,
})

const mapDispatchToProps = {
  requestDiskData,
  requestMetadata,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disk)
