import * as Styled from './styles'

export const Approved = props => {
  return (
    props.approved &&
    props.approved.map(person => {
      return <Styled.Name key={person.id}>{person.name}</Styled.Name>
    })
  )
}
