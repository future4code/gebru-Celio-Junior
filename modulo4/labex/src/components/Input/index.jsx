import * as Styled from './styles'

export const Input = props => (
  <Styled.Input
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    name={props.name}
    required={props.required}
    min={props.min}
    lastItem={props.lastItem}
  />
)

export const Select = props => (
  <Styled.Select lastItem={props.lastItem} required={props.required}>
    {props.children}
  </Styled.Select>
)

export const Option = props => (
  <Styled.Option
    value={props.value}
    disabled={props.disabled}
    selected={props.selected}
  >
    {props.children}
  </Styled.Option>
)
