import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import { Header } from '../../../components/Header'
import { Input, Option, Select } from '../../../components/Input'
import { Button } from '../../../components/Button'

export const CreateTrip = () => {
  const navigate = useNavigate()
  useProtectedPage()

  return (
    <Styled.CreateTrip>
      <Header buttonText="Voltar" />
      <Styled.Content>
        <Styled.Form>
          <Styled.Title>Criar Viagem</Styled.Title>
          <Input placeholder="Nome" />
          <Select>
            <Option disabled selected>
              Escolha um planeta
            </Option>
          </Select>
          <Input type="date" />
          <Input placeholder="Descrição" />
          <Input placeholder="Duração em dias" type="number" lastItem />
          <Button large>Criar</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.CreateTrip>
  )
}
