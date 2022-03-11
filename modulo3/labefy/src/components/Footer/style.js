import styled from "styled-components"

export const Footer = styled.footer`
    grid-column: 1 / 3;
    margin-top: 40px;
    display: grid;
    opacity: 0.6;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30px 1fr;

    @media (max-width: 480px) {
        display: none;
    }
`

export const Title = styled.h2`
    grid-column: 1;
    grid-row: 1;
    margin-left: 60px;
    font-weight: 100;

    @media (max-width: 700px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 18px;
    }
`

export const ItemLeft = styled.span`
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    margin-left: 60px;

    @media (max-width: 700px) {
        font-size: 14px;
        margin-left: 50px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        margin-left: 40px;
    }
`

export const ItemCenter = styled.span`
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    margin-left: 60px;

    @media (max-width: 700px) {
        font-size: 14px;
        margin-left: 50px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        margin-left: 40px;
    }
`

export const ItemRight = styled.span`
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    margin-left: 60px;
    margin-right: 60px;

    @media (max-width: 700px) {
        font-size: 14px;
        margin-left: 50px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        margin-left: 40px;
    }
`