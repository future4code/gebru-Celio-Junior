import styled from 'styled-components'

export const AdminHome = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

export const Content = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 10px 0;
`

export const ListTrips = styled.ul`
  width: 600px;
  height: 400px;
  overflow-y: auto;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondary};
    border-radius: 30px;
  }
`
