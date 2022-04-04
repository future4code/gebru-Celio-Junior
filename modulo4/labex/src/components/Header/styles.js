import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Header = styled.header`
  height: 80px;
  // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  // animation: ${fadeIn} 1s forwards;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 60px;
  cursor: pointer;
`
