import React from 'react'

class Disk extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-3">tree</aside>
          <main className="col-6">table of contents</main>
          <aside className="col-3">preview</aside>
        </div>
      </div>
    )
  }
}

export default Disk
