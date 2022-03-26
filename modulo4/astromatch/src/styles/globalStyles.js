import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    text-decoration: none;
  }

  html, body, #root {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    font-family: 'Libre Baskerville', serif;
  }
`