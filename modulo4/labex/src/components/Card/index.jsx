import * as Styled from './styles'

export const Card = props => (
  <Styled.Card onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
    <Styled.Info>
      <Styled.Title>Nome: </Styled.Title>
      <Styled.Text>{props.trip.name}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Descrição: </Styled.Title>
      <Styled.Text>{props.trip.description}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Planeta: </Styled.Title>
      <Styled.Text>{props.trip.planet}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Duração: </Styled.Title>
      <Styled.Text>{props.trip.durationInDays}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Data: </Styled.Title>
      <Styled.Text>{props.trip.date}</Styled.Text>
    </Styled.Info>
  </Styled.Card>
)
