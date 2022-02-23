import styled from 'styled-components'

export const Tasks = styled.main`
    height: 80%;
    width: 100%;
    border: 1px solid #bacca4;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #232226;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bacca4;
        border-radius: 20px;
    }
`

export const List = styled.ol`

`