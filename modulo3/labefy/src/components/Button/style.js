import styled from "styled-components"

export const Button = styled.button`
    width: 85%;
    min-height: 40px;
    margin-bottom: 30px;
    background: rgba(160, 160, 160, 0.8);
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: none;
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    color: #000;

    &:hover {
        background: rgba(140, 140, 140, 0.8);
    }
`