import * as Styled from './styles'

import { useNavigate } from 'react-router-dom'
import { goApplicationForm } from '../../../routes/coordinator'

import { Header } from '../../../components/Header'
import { Card } from './components/Card'
import {useRequestData} from '../../../hooks/useRequestData'

export const ListTrips = () => {
  const navigate = useNavigate()

  const [data, loadingData, errorData] = useRequestData('trips')

  const listTrips = data && data.trips.map(trip => {
    return <Card key={trip.id} trip={trip} onClick={() => goApplicationForm(navigate)} />
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
