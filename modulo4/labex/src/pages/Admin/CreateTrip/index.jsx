import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator'
import { useProtectedPage } from '../../../hooks/useProtectedPage'

export const CreateTrip = () => {
  const navigate = useNavigate()
  useProtectedPage()

  return (
    <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
  )
}
