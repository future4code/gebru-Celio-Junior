import styled from "styled-components"

export const Input = styled.input`
    background: rgba(244, 244, 244, 0.7);
    border-radius: 6px;
    border: none;
    width: 80%;
    min-height: 38px;
    font-size: 20px;
    padding: 0 10px;
    margin-bottom: 20px;
    color: #000;
    outline: none;

    &:focus {
        background: rgba(220, 220, 220, 0.7);
        box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.20);
    }

    &::placeholder {
        color: #000;
        font-size: 16px;
        letter-spacing: 1px;
    }
`