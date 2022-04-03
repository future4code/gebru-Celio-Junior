import styled from 'styled-components'

export const Button = styled.button`
  width: 160px;
  height: 40px;
  outline: none;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  background-color: transparent;
  font-size: 1.4em;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
  }
`
