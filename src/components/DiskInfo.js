import React from 'react'
import { formatBytes } from '../utils'
import styled from 'styled-components'
import { BYTE_FORMATS } from '../constants'

class DiskInfo extends React.Component {
  render() {
    const {
      diskInfo: { trashSize, totalSpace, usedSpace },
      isFetching,
    } = this.props

    return (
      <div>
        <h5>Информация о диске</h5>
        {isFetching ? (
          'Загрузка...'
        ) : (
          <ul className="list-unstyled">
            <li>Корзина: {`${formatBytes(trashSize)} ${BYTE_FORMATS.MB}`}</li>
            <li>
              Объем диска:{' '}
              {`${formatBytes(totalSpace, BYTE_FORMATS.GB)} ${BYTE_FORMATS.GB}`}
            </li>
            <li>
              Используемый объем:{' '}
              {`${formatBytes(usedSpace)} ${BYTE_FORMATS.MB}`}
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default DiskInfo
