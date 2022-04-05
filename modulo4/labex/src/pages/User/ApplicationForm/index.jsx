import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../../routes/coordinator'
import {Header} from '../../../components/Header'
import {Input, Option, Select} from '../../../components/Input'
import {Button} from '../../../components/Button'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  return (
    <Styled.ApplicationForm>
      <Header buttonText="Voltar" />

      <Styled.Content>
        <Styled.Form>
          <Styled.Title>Inscrever-se para uma viagem</Styled.Title>

          <Select required>
            <Option disabled selected>Escolha uma viagem</Option>
            <Option>Escolha uma viagem</Option>
          </Select>
          <Input placeholder='Nome' name='name' required />
          <Input placeholder='Idade' name='age' type='number' required />
          <Input placeholder='Texto de candidatura' name='applicationText' required />
          <Input placeholder='Profissão' name='profession' required />
          <Select required lastItem>
            <Option disabled selected>Escolha um País</Option>
          </Select>
          <Button large type='submit'>Enviar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.ApplicationForm>
  )
}
