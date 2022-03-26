import styled from 'styled-components'

export const Card = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-row: 2;
  margin-top: 20px;
  width: 340px;
  max-height: 380px;

  border: 2px solid ${props => props.theme.secondary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 70% 10% 20%;
  overflow: hidden;
  letter-spacing: 1px;

  @media (max-width: 420px) {
    max-height: 360px;
    margin-top: 80px;
  }
`

export const Blur = styled.img`
  grid-row: 1;
  grid-column: 1 / 3;
  justify-self: center;
  align-self: center;
  width: 120%;
  height: 110%;
  filter: blur(40px);
`

export const Photo = styled.img`
  grid-row: 1;
  grid-column: 1 / 3;
  align-self: center;
  justify-self: center;
  max-width: 100%;
  max-height: 100%;
  z-index: 7;
`

export const Name = styled.h2`
  grid-row: 2;
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
  z-index: 7;

  background-color: ${props => props.theme.primary};
  border-top: 3px solid ${props => props.theme.secondary};
  font-size: 24px;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

export const Age = styled.h2`
  grid-row: 2;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
  padding: 14px 10px;
  z-index: 7;

  background-color: ${props => props.theme.primary};
  border-top: 3px solid ${props => props.theme.secondary};
  font-size: 24px;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

export const Bio = styled.h3`
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: center;
  padding: 10px;
  z-index: 7;

  background-color: ${props => props.theme.primary};
  font-size: 14px;
  font-weight: 200;
`