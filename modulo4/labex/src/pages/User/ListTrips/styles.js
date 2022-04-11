import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const ListTrips = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

export const Content = styled.main`
  height: 100%;
  display: flex;
`

export const Title = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  padding-left: 80px;
  animation: ${fadeIn} 3s forwards;
`

export const Text = styled.h2`
  margin-top: 100px;
  font-size: 80px;
  font-weight: 100;
`

export const List = styled.ul`
  width: 70%;
  max-height: 400px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  overflow-y: auto;
  animation: ${fadeIn} 4s forwards;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondary};
    border-radius: 30px;
  }
`
