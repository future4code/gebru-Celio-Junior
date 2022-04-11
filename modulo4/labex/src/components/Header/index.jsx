import * as Styled from './styles'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'
import { goHome, goBack, goLogin } from '../../routes/coordinator'

export const Header = props => {
  const navigate = useNavigate()

  const headerType = () => {
    if (props.home) {
      return goLogin(navigate)
    } else if (props.logout) {
      localStorage.removeItem('token')
      return goLogin(navigate)
    } else if (props.login) {
      return goHome(navigate)
    } else {
      return goBack(navigate)
    }
  }

  return (
    <Styled.Header>
      <Styled.Title onClick={() => (props.admin ? '' : goHome(navigate))}>
        LabeX
      </Styled.Title>
      <Button outline onClick={headerType}>
        {props.buttonText}
      </Button>
    </Styled.Header>
  )
}
