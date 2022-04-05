import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminHome, goBack } from '../../../routes/coordinator'
import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useEffect, useState } from 'react'
import { API } from '../../../services/api'

export const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const login = () => {
    const body = {
      email,
      password
    }

    API.post('login', body)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res)
        // goAdminHome(navigate)
      })
      .catch(err => {
        alert('Usuário e/ou Senha incorreta')
      })
  }

  return (
    <Styled.Login>
      <Header buttonText="Voltar" />
      <Styled.Content>
        <Styled.Form>
          <Styled.Title>Entrar na sessão</Styled.Title>
          <Input
            placeholder="Insira seu e-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Insira sua senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            lastItem
          />
          <Button large onClick={login}>Fazer Login</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Login>
  )
}
