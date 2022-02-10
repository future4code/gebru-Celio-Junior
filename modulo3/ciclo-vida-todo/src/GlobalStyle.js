import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        color: #bacca4;
        font-family: 'Roboto', sans-serif;
    }
    
    body {
        width: 100%;
        height: 100vh;
        background-color: #232226;
    }
`

export default GlobalStyle