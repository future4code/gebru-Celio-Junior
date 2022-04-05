import styled from 'styled-components'
import { fadeIn } from '../../../styles/animations'

export const ApplicationForm = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`

export const Content = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 2s forwards;
`

export const Form = styled.form`
  height: 460px;
  width: 500px;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 23px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 30px;
`
