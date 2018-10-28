import * as R from 'ramda'
import React from 'react'
import { connect } from 'react-redux'
import { TableOfContents } from '../components'
import {
  DiskInfoContainer as DiskInfo,
  HeaderContainer as Header,
} from '../containers'
import { getIsAuthorized, getCurrentDirectory } from '../selectors'
import { requestDiskData, requestMetadata, requestRemoveFile } from '../actions'

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
    const { currentDirectory, requestRemoveFile } = this.props

    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <aside className="col-3">
              <DiskInfo />
            </aside>
            <main className="col">
              {currentDirectory &&
                !R.isEmpty(currentDirectory) && (
                  <TableOfContents
                    data={currentDirectory}
                    onClickRemove={requestRemoveFile}
                  />
                )}
            </main>
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
  requestRemoveFile,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disk)
