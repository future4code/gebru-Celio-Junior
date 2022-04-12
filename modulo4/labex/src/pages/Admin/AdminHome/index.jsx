import * as Styled from './styles'
import { API } from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import { goAdminCreateTrip, goTripDetails } from '../../../routes/coordinator'

import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { Card } from '../../../components/Card'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const AdminHome = props => {
  const navigate = useNavigate()
  useProtectedPage()

  const [data, loadingData, errorData] = useRequestData('trips')

  const clickTrip = id => {
    MySwal.fire({
      title: "Selecione sua ação:",
      showConfirmButton: true,
      confirmButtonText: 'Ver detalhes da viagem',
      showDenyButton: true,
      denyButtonText: 'Apagar viagem'
    }).then(result => {
      if (result.isConfirmed) {
        goTripDetails(navigate, id)
      } else if (result.isDenied) {
        const headers = {
          headers: {
            auth: localStorage.getItem('token')
          }
        }
        API.delete(`trips/${id}`, headers)
          .then(() => {
            MySwal.fire({
              title: 'Atualize a página para aplicar a alteração.'
            })
          })
      }
    })
  }

  const listTrips =
    data &&
    data.trips.map(trip => {
      return (
        <Card
          key={trip.id}
          trip={trip}
          onClick={() => clickTrip(trip.id)}
        />
      )
    })

  return (
    <Styled.AdminHome>
      <Header buttonText="Logout" admin logout />
      <Styled.Content>
        <Button large onClick={() => goAdminCreateTrip(navigate)}>
          Criar Viagem
        </Button>
        {loadingData && <p>carregando...</p>}
        <Styled.ListTrips>{listTrips}</Styled.ListTrips>
      </Styled.Content>
    </Styled.AdminHome>
  )
}
