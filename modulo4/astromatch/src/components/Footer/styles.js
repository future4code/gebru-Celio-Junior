import styled from 'styled-components'

export const Footer = styled.footer`
  grid-row: 3;
  display: flex;
  letter-spacing: 2px;

  @media (max-width: 420px) {
    justify-content: space-around;
  }
`

export const Text = styled.span`
  align-self: center;
  margin: 0 auto;
  user-select: none;

  @media (max-width: 420px) {
    margin: 10px;
  }
`

export const ClearButton = styled.div`
  position: absolute;
  right: 40px;

  @media (max-width: 420px) {
    position: relative;
    right: 0;
    height: 20px;
    align-self: center;
  }
`
