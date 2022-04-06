import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import {
  goAdminCreateTrip,
  goTripDetails,
} from '../../../routes/coordinator'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import { useRequestData } from '../../../hooks/useRequestData'
import { Card } from '../../User/ListTrips/components/Card'

export const AdminHome = () => {
  const navigate = useNavigate()
  useProtectedPage()

  const [data, loadingData, errorData] = useRequestData('trips')

  const listTrips =
    data &&
    data.trips.map(trip => {
      return <Card key={trip.id} trip={trip} onClick={() => goTripDetails(navigate, trip.id)} />
    })

  return (
    <Styled.AdminHome>
      <Header buttonText="Logout" logout />
      <Styled.Content>
        <Button large onClick={() => goAdminCreateTrip(navigate)}>Criar Viagem</Button>
        <Styled.ListTrips>{listTrips}</Styled.ListTrips>
      </Styled.Content>
    </Styled.AdminHome>
  )
}
