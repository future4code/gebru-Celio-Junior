import * as Styled from './styles'

export const Button = props => (
  <Styled.Button
    outline={props.outline}
    large={props.large}
    onClick={props.onClick}
  >
    {props.children}
  </Styled.Button>
)
