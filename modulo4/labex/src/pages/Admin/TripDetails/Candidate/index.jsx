import * as Styled from './styles'

export const Candidate = props => {
  return (
    props.candidates &&
    props.candidates.map(candidate => {
      return (
        <Styled.Card key={candidate.id}>
          <Styled.Text>Nome: {candidate.name}</Styled.Text>
          <Styled.Text>Profissão: {candidate.profession}</Styled.Text>
          <Styled.Text>Idade: {candidate.age}</Styled.Text>
          <Styled.Text>País: {candidate.country}</Styled.Text>
          <Styled.Text text>{candidate.applicationText}</Styled.Text>
          <Styled.Decline onClick={() => props.choice(candidate.id, false)}>
            Reprovar
          </Styled.Decline>
          <Styled.Accept
            onClick={() => props.choice(candidate.id, true, candidate.name)}
          >
            Aprovar
          </Styled.Accept>
        </Styled.Card>
      )
    })
  )
}
