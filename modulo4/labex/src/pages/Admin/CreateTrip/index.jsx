import * as Styled from './styles'
import { API } from '../../../services/api'

import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { useForm } from '../../../hooks/useForm'

import { Header } from '../../../components/Header'
import { Input, Option, Select } from '../../../components/Input'
import { Button } from '../../../components/Button'

export const CreateTrip = () => {
  useProtectedPage()

  const { form, onChange, cleanFields } = useForm({
    name: '',
    date: '',
    description: '',
    durationInDays: '',
    planet: '',
  })

  const sendForm = e => {
    e.preventDefault()
    const date = date => date.split('-').reverse().join('/')

    const body = {
      name: form.name,
      planet: form.planet,
      date: date(form.date),
      description: form.description,
      durationInDays: form.durationInDays,
    }

    const headers = {
      headers: {
        auth: localStorage.getItem('token'),
      },
    }

    API.post(`trips`, body, headers).then(res => {
      cleanFields()
    })
  }

  return (
    <Styled.CreateTrip>
      <Header buttonText="Voltar" admin />
      <Styled.Content>
        <Styled.Form onSubmit={sendForm}>
          <Styled.Title>Criar Viagem</Styled.Title>
          <Input
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChange}
            pattern={'^.{5,}'}
            required
          />
          <Select
            defaultValue={'DEFAULT'}
            name="planet"
            onChange={onChange}
            required
          >
            <Option value="DEFAULT" disabled>
              Escolha um planeta
            </Option>
            <Option value="mercurio">Mercúrio</Option>
            <Option value="venus">Vênus</Option>
            <Option value="terra">Terra</Option>
            <Option value="marte">Marte</Option>
            <Option value="jupiter">Júpiter</Option>
            <Option value="saturno">Saturno</Option>
            <Option value="urano">Urano</Option>
            <Option value="netuno">Netuno</Option>
          </Select>
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            required
          />
          <Input
            placeholder="Descrição"
            name="description"
            value={form.description}
            onChange={onChange}
            pattern={'^.{30,}'}
            required
          />
          <Input
            placeholder="Duração em dias"
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            type="number"
            min="50"
            required
            lastItem
          />
          <Button large>Criar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.CreateTrip>
  )
}
