import * as Styled from './styles'

export const Input = props => (
  <Styled.Input
    type={props.type}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    name={props.name}
    required={props.required}
    min={props.min}
    lastItem={props.lastItem}
    pattern={props.pattern}
  />
)

export const Select = props => (
  <Styled.Select
    value={props.value}
    onChange={props.onChange}
    name={props.name}
    lastItem={props.lastItem}
    required={props.required}
    defaultValue={props.defaultValue}
  >
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
