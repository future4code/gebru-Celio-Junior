import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goAdminTripDetails, goBack } from '../../../routes/coordinator'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => goAdminTripDetails(navigate)}>Ir para home admin</button>
      <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
    </>
  )
}
