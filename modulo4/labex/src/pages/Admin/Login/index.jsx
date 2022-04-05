import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminHome } from '../../../routes/coordinator'
import {Header} from '../../../components/Header'
import {Input} from '../../../components/Input'
import { Button } from '../../../components/Button'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Styled.Login>
      <Header buttonText='Voltar' />
      <Styled.Content>
        <Styled.Form>
          <Styled.Title>Entrar na sessão</Styled.Title>
          <Input placeholder='Insira seu e-mail' />
          <Input placeholder='Insira sua senha' type='password' lastItem />
          <Button large>Fazer Login</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Login>
  )
}
