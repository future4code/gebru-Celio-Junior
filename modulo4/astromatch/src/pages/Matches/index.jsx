import { useState, useEffect } from 'react'
import * as Styled from './styles'

import API from '../../services/api'

import { Header } from '../../components/Header'

export const Matches = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    API.get('matches').then(res => {
      setMatches(res.data.matches)
    })
  }, [])

  const listMatches = matches.map(match => (
    <Styled.Item key={match.id}>
      <Styled.Photo src={match.photo} />
      <Styled.Name>{match.name}</Styled.Name>
    </Styled.Item>
  ))

  return (
    <Styled.Container>
      <Header button="Voltar para Home" to="/" />
      <Styled.Main>
        <Styled.Title>Lista de Matches</Styled.Title>
        <Styled.List>{listMatches}</Styled.List>
      </Styled.Main>
    </Styled.Container>
  )
}
