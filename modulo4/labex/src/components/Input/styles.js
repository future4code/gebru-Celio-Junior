import styled from 'styled-components'

export const Input = styled.input`
  width: 86%;
  height: 46px;
  font-size: 14px;
  border: none;
  border-radius: 13px;
  padding: 0 10px;
  margin: 10px 0;
`

export const Select = styled.select`
  width: 90%;
  height: 46px;
  font-size: 14px;
  border: none;
  border-radius: 13px;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: ${props => (props.lastItem ? '20px' : '10px')};
`

export const Option = styled.option``
