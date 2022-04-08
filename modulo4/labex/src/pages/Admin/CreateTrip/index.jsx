import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { Header } from '../../../components/Header'
import { Input, Option, Select } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useForm } from '../../../hooks/useForm'

export const CreateTrip = () => {
  const navigate = useNavigate()
  useProtectedPage()

  const { form, onChange, cleanFields } = useForm({
    name: '',
    date: '',
    description: '',
    durationInDays: '',
  })

  const sendForm = e => {
    e.preventDefault()
  }

  return (
    <Styled.CreateTrip>
      <Header buttonText="Voltar" />
      <Styled.Content>
        <Styled.Form onSubmit={sendForm}>
          <Styled.Title>Criar Viagem</Styled.Title>
          <Input
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChange}
            pattern={'^.{5,}'}
          />
          <Select>
            <Option disabled selected>
              Escolha um planeta
            </Option>
          </Select>
          <Input type="date" />
          <Input
            placeholder="Descrição"
            name="description"
            value={form.description}
            onChange={onChange}
            pattern={'^.{30,}'}
          />
          <Input
            placeholder="Duração em dias"
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            type="number"
            min='50'
            lastItem
          />
          <Button large>Criar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.CreateTrip>
  )
}
