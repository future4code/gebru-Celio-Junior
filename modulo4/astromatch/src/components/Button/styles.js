import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Libre Baskerville', serif;
  color: ${props => props.theme.secondary};
  letter-spacing: 1px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > a,
  & > span {
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 10px;
    color: ${props => props.theme.secondary};
    padding: 12px 14px;
    transition: all 0.2s ease 0s;
  }

  & > a:hover,
  & > span:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
  }
`