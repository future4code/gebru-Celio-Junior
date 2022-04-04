import * as Styled from './styles'
import { useEffect, useState } from 'react'
import API from '../../../services/api'

import { useNavigate } from 'react-router-dom'
import { goApplicationForm } from '../../../routes/coordinator'

import { Header } from '../../../components/Header'
import { Card } from '../../../components/Card'

export const ListTrips = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    API.get('trips').then(res => {
      setTrips(res.data.trips)
    })
  }, [])

  const listTrips = trips.map(trip => {
    return <Card trip={trip} onClick={() => goApplicationForm(navigate)} />
  })

  return (
    <Styled.ListTrips>
      <Header buttonText="Voltar" />

      <Styled.Content>
        <Styled.Title>
          <Styled.Text>Nossas Viagens:</Styled.Text>
        </Styled.Title>

        <Styled.List>{listTrips}</Styled.List>
      </Styled.Content>
    </Styled.ListTrips>
  )
}
