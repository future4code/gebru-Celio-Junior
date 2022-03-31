import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    text-decoration: none;
  }

  body {
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 1px;
    color: ${props => props.theme.primary};
  }

  a:visited {
    color: ${props => props.theme.primary};
  }
`
