import * as Styled from './styles'

export const Button = props => (
  <Styled.Button mRight={props.mRight} >{props.children}</Styled.Button>
)