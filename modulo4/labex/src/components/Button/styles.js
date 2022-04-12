import styled from 'styled-components'

export const Button = styled.button`
  width: ${props => (props.large ? '270px' : '180px')};
  height: 48px;
  outline: none;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 23px;
  background-color: ${props =>
    props.outline ? 'transparent' : props.theme.secondary};
  color: ${props => (props.outline ? props.theme.secondary : '')};
  font-size: 1.4em;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: ${props =>
      props.outline ? props.theme.secondary : 'transparent'};
    font-size: 1.5em;
    color: ${props =>
      props.outline ? props.theme.primary : props.theme.secondary};
  }
`
