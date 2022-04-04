import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goTripsList } from '../../../routes/coordinator'
import { Header } from '../../../components/Header'
import { Button } from '../../../components/Button'
import Decoration from '../../../assets/img/decoration.svg'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <Styled.Home>
      <Header buttonText="Admin" home />
      <Styled.Content>
        <Styled.Apresentation>
          <Styled.Text>Viver,</Styled.Text>
          <Styled.Text>Aprender,</Styled.Text>
          <Styled.Text lastItem>Experimentar...</Styled.Text>
          <Button large onClick={() => goTripsList(navigate)}>
            Nossas Viagens
          </Button>
        </Styled.Apresentation>

        <Styled.Image>
          <Styled.Decoration src={Decoration} />
        </Styled.Image>
      </Styled.Content>
    </Styled.Home>
  )
}
