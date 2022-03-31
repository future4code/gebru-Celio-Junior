import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 40px;
  height: 100vh;

  @media (max-width: 420px) {
    grid-template-rows: 110px 1fr 80px;
  }
`

export const Main = styled.main`
  grid-row: 2;
  justify-self: center;
  margin-top: 30px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  width: 340px;
  max-height: 380px;
  border: 2px solid ${props => props.theme.secondary};
  letter-spacing: 1px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.primary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondary};
    border-radius: 20px;
  }
`

export const Title = styled.h2`
  text-align: center;
  letter-spacing: 2px;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`

export const Item = styled.li`
  border: 2px solid ${props => props.theme.secondary};
  margin-bottom: 10px;
  padding: 8px;
  display: grid;
  height: 50px;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  align-items: center;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    height: 90px;
    font-size: 18px;
  }
`

export const Photo = styled.img`
  grid-column: 1 / 2;
  grid-row: 1;
  align-self: center;
  justify-self: center;
  max-width: 100%;
  max-height: 100%;
`

export const Name = styled.h3`
  font-weight: 300;
  margin-left: 10px;
`