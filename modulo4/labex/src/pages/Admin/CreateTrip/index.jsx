import {useNavigate} from 'react-router-dom'
import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator'

export const CreateTrip = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
  )
}
