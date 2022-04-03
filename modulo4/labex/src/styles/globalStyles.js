import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    text-decoration: none; 
  }

  body, #root {
    letter-spacing: 1px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    font-family: 'Roboto Mono', monospace;
}

  button {
    font-weight: 600;
    font-family: 'Roboto Mono', monospace;
  }

  a:visited {
    color: ${props => props.theme.primary};
  }
`
