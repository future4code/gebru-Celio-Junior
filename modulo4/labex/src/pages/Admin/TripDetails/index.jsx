import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { Header } from '../../../components/Header'
import { useRequestData } from '../../../hooks/useRequestData'
import {Candidate} from './components/Candidate'

export const TripDetails = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const pathParams = useParams()

  const [data, loadingData, errorData] = useRequestData(`trip/${pathParams.id}`, localStorage.getItem('token'))
  const trip = data && data.trip

  const candidates = trip && trip.candidates.map(person => {
    return <Candidate person={person} />
  })

  return (
    <Styled.TripDetails>
      <Header buttonText="Voltar" />

      <Styled.Content>
        <Styled.TripAbout>
          <Styled.Title name>{trip && trip.name}</Styled.Title>
          <Styled.Text>Descrição: {trip && trip.description}</Styled.Text>
          <Styled.Text>Planeta: {trip && trip.planet}</Styled.Text>
          <Styled.Text>Duração: {trip && trip.durationInDays}</Styled.Text>
          <Styled.Text>Data: {trip && trip.date}</Styled.Text>
        </Styled.TripAbout>

        <Styled.Pending>
          <Styled.Title>Pendentes</Styled.Title>
          {candidates}
        </Styled.Pending>

        <Styled.Approved>
          <Styled.Title>Aprovados</Styled.Title>
        </Styled.Approved>
      </Styled.Content>
    </Styled.TripDetails>
  )
}
