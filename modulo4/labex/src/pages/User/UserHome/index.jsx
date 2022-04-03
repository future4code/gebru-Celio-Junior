import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goTripsList, goLogin } from '../../../routes/coordinator'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <Styled.Background>
      <Styled.ContainerTop>
        <Styled.Title>LabeX</Styled.Title>
        <Styled.Subtitle>Experience</Styled.Subtitle>
      </Styled.ContainerTop>

      <Styled.ContainerBottom>
        <Styled.Option onClick={() => goTripsList(navigate)}>Viagens</Styled.Option>
        <Styled.Option onClick={() => goLogin(navigate)}>Admin</Styled.Option>
      </Styled.ContainerBottom>
    </Styled.Background>
  )
}
