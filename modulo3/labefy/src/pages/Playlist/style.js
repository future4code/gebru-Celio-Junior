import styled from "styled-components"

export const Layout = styled.main`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 120px 1fr 120px;
    height: 100%;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
`