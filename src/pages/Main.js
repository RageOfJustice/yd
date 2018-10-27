import React from 'react'
import styled from 'styled-components'

const RedButton = styled.button`
    outline: none !important;
    cursor: pointer;
    background-color: #d63031
    width: 100px;
    height: 100px;
    box-shadow: 2px 4px 4px rgba(0,0,0,0.5);
    border: none;
    border-radius: 50px;
    transition: all 0.5s;
    :active{
        box-shadow: 4px 6px 4px rgba(0,0,0,0.5);
    }
    :hover{
        opacity: 0.85;
    }
`

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
        <RedButton />
      </Container>
    )
  }
}

export default Main
