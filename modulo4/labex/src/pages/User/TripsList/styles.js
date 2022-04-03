import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
  animation: ${fadeIn} 2s forwards;
`

export const Content = styled.div``

export const Title = styled.h1`
  font-weight: 100;
  font-size: 60px;
  text-align: center;
  margin: 10px 0 20px 0;
`

export const ListTrips = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`