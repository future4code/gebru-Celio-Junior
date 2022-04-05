import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    text-decoration: none;
    list-style-type: none;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
  }

  button {
    color: ${props => props.theme.primary}
  }
`
