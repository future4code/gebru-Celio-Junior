import styled from 'styled-components'

export const Card = styled.li`
  height: 190px;
  width: 500px;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 30px;
  margin: 16px 0;
  padding: 8px 14px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  opacity: 0.9;
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
  font-weight: 900;
`

export const Text = styled.span`
  font-size: 14px;
  font-weight: 600;
  transition: all 0.6s ease 0s;
`
