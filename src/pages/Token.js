import React from 'react'
import styled from 'styled-components'
import { BigButton } from '../components'
import { OAuthRequestURL } from '../api'
import theme from '../theme'
import { connect } from 'react-redux'
import { receiveToken } from '../actions'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Main extends React.Component {
  componentDidMount() {
    this.props.receiveToken(document.location.hash)
  }

  render() {
    return (
      <Container>
        <BigButton bgColor={theme.colors.green} href={OAuthRequestURL} />
      </Container>
    )
  }
}

const mapDispatchToProps = {
  receiveToken,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Main)
