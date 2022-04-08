import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../../routes/coordinator'
import { Header } from '../../../components/Header'
import { Input, Option, Select } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useForm } from '../../../hooks/useForm'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
  })

  const sendForm = e => {
    e.preventDefault()
    console.log('Send')
  }

  return (
    <Styled.ApplicationForm>
      <Header buttonText="Voltar" />

      <Styled.Content>
        <Styled.Form onSubmit={sendForm}>
          <Styled.Title>Inscrever-se para uma viagem</Styled.Title>
          <Select required>
            <Option disabled selected>
              Escolha uma viagem
            </Option>
            <Option>Escolha uma viagem</Option>
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
            min='18'
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
          <Select required lastItem>
            <Option disabled selected>
              Escolha um País
            </Option>
          </Select>
          <Button large>Enviar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.ApplicationForm>
  )
}
