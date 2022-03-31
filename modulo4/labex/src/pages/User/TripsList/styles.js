import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.background};
`

export const Title = styled.h1`
  font-size: 80px;
  margin: 0 auto;
  animation: ${fadeIn} 6s forwards;
`