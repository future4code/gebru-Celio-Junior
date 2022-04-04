import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../../routes/coordinator'
import {Header} from '../../../components/Header'

export const ApplicationForm = () => {
  const navigate = useNavigate()

  return (
    <Styled.ApplicationForm>
      <Header buttonText="Voltar" />
    </Styled.ApplicationForm>
  )
}
