import * as Styled from './styles'
import { goBack } from '../../../routes/coordinator.js'
import {useNavigate} from 'react-router-dom'

export const TripDetails = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => goBack(navigate)}>Voltar para página anterior</button>
  )
}