import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const Background = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.background};
`

export const ContainerTop = styled.header`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 100px;
  font-weight: 300;
  animation: ${fadeIn} 6s forwards;
`
export const Subtitle = styled.h2`
  font-size: 40px;
  font-weight: 100;
  animation: ${fadeIn} 10s forwards;
`

export const ContainerBottom = styled.main`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Option = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transition: all 0.6s ease 0s;
  animation: ${fadeIn} 6s forwards;
  cursor: pointer;

  &:hover {
    background-color: #4C566A;
    color: #ECEFF4;
    font-size: 48px;
  }
`
