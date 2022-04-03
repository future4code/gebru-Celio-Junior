import * as Styled from './styles'

export const Button = props => (
  <Styled.Button onClick={props.onClick}>{props.children}</Styled.Button>
)
