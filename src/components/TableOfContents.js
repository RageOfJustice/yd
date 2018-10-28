import React from 'react'
import { Link } from 'react-router-dom'
import { formatBytes } from '../utils'
import { BYTE_FORMATS } from '../constants'

class TableOfContents extends React.Component {
  render() {
    const { data } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Опции</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ resource_id, name, size, type }) => {
            const path = `${window.location.pathname}/${name}`
            const isDir = type === 'dir'
            return (
              <tr key={resource_id}>
                <td>{isDir ? <Link to={path}>{name}</Link> : name}</td>
                <td>
                  {isDir
                    ? '-'
                    : `${formatBytes(size, BYTE_FORMATS.MB)} ${
                        BYTE_FORMATS.MB
                      }`}
                </td>
                <td>no</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default TableOfContents
