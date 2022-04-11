import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const Home = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
`

export const Apresentation = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  animation: ${fadeIn} 4s forwards;
`

export const Text = styled.h2`
  font-size: 52px;
  font-weight: 100;
  margin-bottom: ${props => (props.lastItem ? '30px' : '16px')};
`

export const Image = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  @media (max-width: 850px) {
    display: none;
  }
`

export const Decoration = styled.img`
  width: 420px;
  animation: ${fadeIn} 6s forwards;
`
