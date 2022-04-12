import styled from 'styled-components'

export const CreateTrip = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  font-size: 38px;
`
