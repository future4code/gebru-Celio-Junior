import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid ${props => props.theme.primary};
  animation: ${fadeIn} 1s forwards;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 60px;
  cursor: pointer;
`
