import React from 'react'
import styled from 'styled-components'
import { BigButton } from '../components'
import { OAuthRequestURL } from '../api'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Main extends React.Component {
  _handleClick = () => {
    window.location.href = OAuthRequestURL
  }

  render() {
    return (
      <Container>
        <BigButton onClick={this._handleClick} />
      </Container>
    )
  }
}

export default Main
