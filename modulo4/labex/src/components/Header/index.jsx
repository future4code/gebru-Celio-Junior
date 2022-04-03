import * as Styled from './styles'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import { goHome, goBack } from '../../routes/coordinator'

export const Header = () => {
  const navigate = useNavigate()

  return (
  <Styled.Header>
    <Styled.Title onClick={() => goHome(navigate)}>LabeX</Styled.Title>
    <Button onClick={() => goBack(navigate)}>Voltar</Button>
  </Styled.Header>

  )
}

