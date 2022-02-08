import styled from "styled-components"

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border: none;
    border-top: 1px dashed #bacca4;
    background-color: #2b2726;
    font-size: 18px;
    color: #bacca4;
    cursor: pointer;
`