import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminHome } from '../../../routes/coordinator'
import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { useState } from 'react'
import { API } from '../../../services/api'
import { useForm } from '../../../hooks/useForm'

export const Login = () => {
  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({ email: '', password: '' })

  const login = e => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password,
    }

    API.post('login', body)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        goAdminHome(navigate)
      })
      .catch(err => {
        alert('Usuário e/ou Senha incorreta')
      })
  }

  return (
    <Styled.Login>
      <Header login buttonText="Voltar" />
      <Styled.Content>
        <Styled.Form onSubmit={login}>
          <Styled.Title>Entrar na sessão</Styled.Title>
          <Input
            placeholder="Insira seu e-mail"
            name={'email'}
            onChange={onChange}
            value={form.email}
            type="email"
            required
          />
          <Input
            placeholder="Insira sua senha"
            name="password"
            onChange={onChange}
            value={form.password}
            type="password"
            required
            lastItem
          />
          <Button large>Fazer Login</Button>
        </Styled.Form>
      </Styled.Content>
    </Styled.Login>
  )
}
