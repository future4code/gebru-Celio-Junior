import * as Styled from './styles'

export const Candidate = props => {
  return (
    <Styled.Card>
      <Styled.Text>Nome: {props.person.name}</Styled.Text>
      <Styled.Text>Profissão: {props.person.profession}</Styled.Text>
      <Styled.Text>Idade: {props.person.age}</Styled.Text>
      <Styled.Text>País: {props.person.country}</Styled.Text>
      <Styled.Text text>{props.person.applicationText}</Styled.Text>
      <Styled.Decline onClick={() => props.choice(props.person.id, false)}>
        Reprovar
      </Styled.Decline>
      <Styled.Accept
        onClick={() => props.choice(props.person.id, true, props.person.name)}
      >
        Aprovar
      </Styled.Accept>
    </Styled.Card>
  )
}
