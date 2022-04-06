import {Button} from '../../../../../components/Button'
import * as Styled from './styles'

export const Candidate = props => {
  return (
    <Styled.Card>
      <Styled.Text>Nome: {props.person.name}</Styled.Text>
      <Styled.Text>Profissão: {props.person.profession}</Styled.Text>
      <Styled.Text>Idade: {props.person.age}</Styled.Text>
      <Styled.Text>País: {props.person.country}</Styled.Text>
      <Styled.Text text>{props.person.applicationText}</Styled.Text>
      <Styled.Decline>Reprovar</Styled.Decline>
      <Styled.Accept>Aprovar</Styled.Accept>
    </Styled.Card>
  )
}
