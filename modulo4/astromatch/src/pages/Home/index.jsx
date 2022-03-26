import React from 'react'
import * as Styled from './styles'

import { Header } from '../../components/Header'
import { MainHome } from './components/Main'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <Styled.Container>
      <Header button="Lista de Matches" to="matches" />
      <MainHome />
      <Footer />
    </Styled.Container>
  )
}