import * as Styled from './styles'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import { goHome, goBack, goLogin } from '../../routes/coordinator'

export const Header = props => {
  const navigate = useNavigate()

  return (
  <Styled.Header>
    <Styled.Title onClick={() => goHome(navigate)}>LabeX</Styled.Title>
    <Button outline onClick={() => props.home ? goLogin(navigate) : goBack(navigate)}>{props.buttonText}</Button>
  </Styled.Header>

  )
}

