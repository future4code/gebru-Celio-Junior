import styled from "styled-components"

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: 18px;
    padding-left: 8px;
    border: none;
    border-right: 1px dashed #bacca4;
    border-top: 1px dashed #bacca4;
    background-color: #2b2726;
    letter-spacing: 1px;
    color: #bacca4;
`