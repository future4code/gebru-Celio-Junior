import * as Styled from './styles'

export const Card = props => (
  <Styled.Card onClick={props.onClick}>
    <Styled.Info>
      <Styled.Title>Nome: </Styled.Title>
      <Styled.Text>{props.travel.nome}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Descrição: </Styled.Title>
      <Styled.Text>{props.travel.id}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Planeta: </Styled.Title>
      <Styled.Text>{props.travel.nome}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Duração: </Styled.Title>
      <Styled.Text>{props.travel.nome}</Styled.Text>
    </Styled.Info>

    <Styled.Info>
      <Styled.Title>Data: </Styled.Title>
      <Styled.Text>{props.travel.nome}</Styled.Text>
    </Styled.Info>
  </Styled.Card>
)
