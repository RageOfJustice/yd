import styled from 'styled-components'

const BigButton = styled.a`
  outline: none !important;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.red};
  width: 100px;
  height: 100px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50px;
  transition: all 0.5s;
  :active {
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.5);
  }
  :hover {
    opacity: 0.85;
  }
`

export default BigButton
