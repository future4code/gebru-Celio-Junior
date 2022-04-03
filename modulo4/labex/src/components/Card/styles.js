import styled from 'styled-components'

export const Card = styled.div`
  height: 190px;
  width: 500px;
  border: 1px solid #000;
  border-radius: 4px;
  margin: 16px 0;
  padding: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  transition: all 0.6s ease 0s;
  cursor: pointer;

  &:hover {
    width: 520px;
  }
`

export const Info = styled.div``

export const Title = styled.h3`
  display: inline-block;
  font-size: 16px;
  margin: 7px 7px 7px 0;
  transition: all 0.6s ease 0s;
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: 300;
  transition: all 0.6s ease 0s;
`
