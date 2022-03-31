import styled from 'styled-components'

export const Button = styled.button`
  width: 180px;
  height: 60px;
  outline: none;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 30px;
  margin-right: ${props => props.mRight};
  background-color: transparent;
  font-size: 1.4em;
`