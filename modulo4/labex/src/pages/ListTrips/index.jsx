import * as Styled from './styles'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { goApplicationForm, goBack } from '../../routes/coordinator'

export const ListTrips = () => {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      {/* <Styled.Title>Nossos Destinos</Styled.Title> */}
      {/* <Header /> */}
      <button onClick={() => goApplicationForm(navigate)}>Ir para formulário</button> 
      <button onClick={() => goBack(navigate)}>Voltar página anterior</button>
    </Styled.Container>
  )
}
