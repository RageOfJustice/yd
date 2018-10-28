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
          {data.map(({ resource_id, name, size, type }) => (
            <tr key={resource_id}>
              <td>
                {type === 'dir' ? (
                  <Link to={`${window.location.pathname}/${name}`}>{name}</Link>
                ) : (
                  name
                )}
              </td>
              <td>
                {type === 'dir'
                  ? '-'
                  : `${formatBytes(size, BYTE_FORMATS.MB)} ${(size,
                    BYTE_FORMATS.MB)}`}
              </td>
              <td>no</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default TableOfContents
