import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const Login = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: ${fadeIn} 2s forwards;
`

export const Form = styled.div`
  height: 300px;
  width: 500px;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 23px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 100;
  margin: 20px 0;
`
