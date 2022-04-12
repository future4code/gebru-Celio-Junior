import * as Styled from './styles'
import { API } from '../../../services/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { Header } from '../../../components/Header'

import { Candidate } from './Candidate'
import { Approved } from './Approved'

export const TripDetails = () => {
  useProtectedPage()
  const pathParams = useParams()

  const [trip, setTrip] = useState([])

  const getTripDetail = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token'),
      },
    }
    API.get(`trip/${pathParams.id}`, headers).then(res =>
      setTrip(res.data.trip)
    )
  }

  useEffect(() => {
    getTripDetail()
  }, [])

  const choice = (id, res) => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token'),
      },
    }

    const body = {
      approve: res,
    }

    API.put(`trips/${pathParams.id}/candidates/${id}/decide`, body, headers)
      .then(res => {
        getTripDetail()
      })
      .catch(err => console.log('Deu errado: ' + err))
  }

  return (
    <Styled.TripDetails>
      <Header buttonText="Voltar" admin />

      <Styled.Content>
        <Styled.TripAbout>
          <Styled.Title name={'true'}>{trip && trip.name}</Styled.Title>
          <Styled.Text>Descrição: {trip && trip.description}</Styled.Text>
          <Styled.Text>Planeta: {trip && trip.planet}</Styled.Text>
          <Styled.Text>Duração: {trip && trip.durationInDays}</Styled.Text>
          <Styled.Text>Data: {trip && trip.date}</Styled.Text>
        </Styled.TripAbout>

        <Styled.Pending>
          <Styled.Title>Pendentes</Styled.Title>
          <Candidate candidates={trip.candidates} choice={choice} />
        </Styled.Pending>

        <Styled.Approved>
          <Styled.Title>Aprovados</Styled.Title>
          {<Approved approved={trip.approved} />}
        </Styled.Approved>
      </Styled.Content>
    </Styled.TripDetails>
  )
}
