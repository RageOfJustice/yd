import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'
import { BigButton } from '../components'
import theme from '../theme'
import { connect } from 'react-redux'
import { getIsAuthorized } from '../selectors'
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

  _handleClick = () => {
    const { history, isAuthorized } = this.props
    if (isAuthorized) {
      history.push('/disk')
    }
  }

  render() {
    return (
      <Container>
        <BigButton bgColor={theme.colors.green} onClick={this._handleClick} />
      </Container>
    )
  }
}

const mapStateToProps = R.applySpec({ isAuthorized: getIsAuthorized })

const mapDispatchToProps = {
  receiveToken,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)
