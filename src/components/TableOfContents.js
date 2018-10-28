import React from 'react'
import { Link } from 'react-router-dom'
import { formatBytes } from '../utils'
import { BYTE_FORMATS } from '../constants'
import moment from 'moment'

class TableOfContents extends React.Component {
  render() {
    const { data } = this.props
    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Дата создания</th>
            <th scope="col">Дата изменения</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {data.map(
            ({ resource_id, name, preview, size, type, modified, created }) => {
              const path = `${window.location.pathname}/${name}`
              const isDir = type === 'dir'
              return (
                <tr key={resource_id}>
                  <td>
                    {isDir ? (
                      <Link to={path}>{name}</Link>
                    ) : (
                      <a
                        href={preview}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {name}
                      </a>
                    )}
                  </td>
                  <td>{moment(created).format('D.M.YYYY')}</td>
                  <td>{moment(modified).format('D.M.YYYY')}</td>
                  <td>
                    {isDir
                      ? '-'
                      : `${formatBytes(size, BYTE_FORMATS.MB)} ${
                          BYTE_FORMATS.MB
                        }`}
                  </td>
                  <td>
                    <button type="button" class="btn btn-link">
                      &times;
                    </button>
                  </td>
                </tr>
              )
            },
          )}
        </tbody>
      </table>
    )
  }
}

export default TableOfContents
