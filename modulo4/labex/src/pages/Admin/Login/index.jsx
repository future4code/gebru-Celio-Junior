import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminHome, goBack } from '../../../routes/coordinator'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => goAdminHome(navigate)}>Ir para home admin</button>
      <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
    </>
  )
}
