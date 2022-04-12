import styled from 'styled-components'

export const TripDetails = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: 50% 30% 20%;
  grid-template-rows: 1fr;
  height: 100vh;
`

export const TripAbout = styled.section`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 60px 20px;
`

export const Title = styled.h2`
  font-size: ${props => (props.name ? '40px' : '32px')};
  font-weight: 100;
  text-align: center;
`

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`

export const Pending = styled.section`
  grid-column: 2 / 3;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid ${props => props.theme.secondary};
  overflow-y: auto;
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondary};
    border-radius: 30px;
  }
`

export const Approved = styled.section`
  grid-column: 3 / 4;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondary};
    border-radius: 30px;
  }
`
