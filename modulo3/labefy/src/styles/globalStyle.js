import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #e6e6e6;
        user-select: none;
    }

`

export default GlobalStyle