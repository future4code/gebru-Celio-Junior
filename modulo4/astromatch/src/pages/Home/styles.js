import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 40px;
  height: 100vh;

  @media (max-width: 420px) {
    grid-template-rows: 110px 1fr 80px;
  }
`