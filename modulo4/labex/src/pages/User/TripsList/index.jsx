import * as Styled from './styles'
import { Header } from '../../../components/Header'
import { useNavigate } from 'react-router-dom'
import { goApplicationForm } from '../../../routes/coordinator'
import { Card } from '../../../components/Card'

export const ListTrips = () => {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Header />
      <Styled.Content>
        {/* <button onClick={() => goApplicationForm(navigate)}> */}
        {/*   Ir para formulário */}
        {/* </button> */}
        <Styled.Title>Nossas Viagens</Styled.Title>
        <Styled.ListTrips>
          {/* <Card onClick={() => goApplicationForm(navigate)} travel={'AQUI DEVE RECEBER UM OBJ'}/> */}
        </Styled.ListTrips>
      </Styled.Content>
    </Styled.Container>
  )
}
