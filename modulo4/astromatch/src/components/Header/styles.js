import styled from 'styled-components'

export const Header = styled.header`
  grid-row: 1;
  display: grid;
  grid-template-columns: 6fr 4fr 1fr;
  align-items: center;
  padding: 0 40px;
  letter-spacing: 2px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 6px 20px;
  }
`

export const Title = styled.h1`
  font-size: 34px;

  @media (max-width: 420px) {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    font-size: 20px;
  }
`

export const SwitchScreen = styled.div`
  justify-self: end;

  @media (max-width: 420px) {
    justify-self: center;
    grid-row: 1;
    grid-column: 2 / 3;
  }
`

export const IconThemes = styled.img`
  cursor: pointer;
  width: 34px;
  justify-self: end;
  margin-left: 20px;

  @media (max-width: 420px) {
    grid-row: 2;
    grid-column: 1 / 3;
    justify-self: center;
  }
`
