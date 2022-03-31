import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/coordinator'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => goBack(navigate)}>Voltar para página anterior</button>
  )
}
