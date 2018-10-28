import React from 'react'
import styled from 'styled-components'

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
            <li>Корзина: {trashSize}</li>
            <li>Объем диска: {totalSpace}</li>
            <li>Используемый объем: {usedSpace}</li>
          </ul>
        )}
      </div>
    )
  }
}

export default DiskInfo
