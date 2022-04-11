import styled from 'styled-components'

export const Card = styled.div`
  width: 80%;
  min-height: 180px;
  border-radius: 13px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  opacity: 0.9;
  margin-top: 30px;
  padding: 10px;
  position: relative;
  cursor: pointer;
`

export const Text = styled.p`
  font-size: ${props => (props.text ? '14px' : '18px')};
  margin-bottom: 8px;
  font-weight: 600;
`

export const Accept = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  transition: all 0.6s ease 0s;
  opacity: 0.62;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;

  &:hover {
    background-color: ${props => props.theme.success};
    color: ${props => props.theme.secondary};
  }
`

export const Decline = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  transition: all 0.6s ease 0s;
  opacity: 0.62;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;

  &:hover {
    background-color: ${props => props.theme.danger};
    color: ${props => props.theme.secondary};
  }
`
