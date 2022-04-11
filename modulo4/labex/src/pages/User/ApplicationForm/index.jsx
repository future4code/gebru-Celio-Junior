import * as Styled from './styles'
import { Header } from '../../../components/Header'
import { Input, Option, Select } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useForm } from '../../../hooks/useForm'
import { API } from '../../../services/api'
import { CountryList } from './countryList'
import { useEffect, useState } from 'react'

export const ApplicationForm = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    API.get('trips').then(res => setTrips(res.data.trips))
  }, [])

  const { form, onChange, cleanFields } = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null,
  })

  const sendForm = e => {
    e.preventDefault()

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    }

    API.post(`trips/${form.trip}/apply`, body).then(res => {
      cleanFields()
    })
  }

  return (
    <Styled.ApplicationForm>
      <Header buttonText="Voltar" />

      <Styled.Content>
        <Styled.Form onSubmit={sendForm}>
          <Styled.Title>Inscrever-se para uma viagem</Styled.Title>
          <Select
            name="trip"
            onChange={onChange}
            required
            defaultValue={'DEFAULT'}
          >
            <Option value="DEFAULT" disabled>
              Escolha uma viagem
            </Option>
            {trips.map(trip => (
              <Option key={trip.id} value={trip.id}>
                {trip.name}
              </Option>
            ))}
          </Select>
          <Input
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChange}
            pattern={'^.{3,}'}
            required
          />
          <Input
            placeholder="Idade"
            name="age"
            value={form.age}
            onChange={onChange}
            type="number"
            min="18"
            required
          />
          <Input
            placeholder="Texto de candidatura"
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            pattern={'^.{30,}'}
            required
          />
          <Input
            placeholder="Profissão"
            name="profession"
            value={form.profession}
            onChange={onChange}
            pattern={'^.{10,}'}
            required
          />
          <CountryList onChange={onChange} defaultValue={'DEFAULT'}>
            <Option value="DEFAULT" disabled>
              Qual o seu País?
            </Option>
          </CountryList>
          <Button large>Enviar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.ApplicationForm>
  )
}
