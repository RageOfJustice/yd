import React from 'react'
import styled from 'styled-components'
import { BigButton } from '../components'
import { OAuthRequestURL } from '../api'
import theme from '../theme'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Main extends React.Component {
  render() {
    return (
      <Container>
        <BigButton bgColor={theme.colors.green} href={OAuthRequestURL} />
      </Container>
    )
  }
}

export default Main
