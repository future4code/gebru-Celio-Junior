import styled from "styled-components"

export const Chat = styled.main`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scroll-behavior: auto;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #2b2726;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bacca4;
        border-radius: 20px;
    }
`

export const Username = styled.h4`
    margin-bottom: 4px;
`

export const Me = styled.li`
    justify-self: flex-end;
    align-self: flex-end;
    font-size: 16px;
    width: 260px;
    background-color: #9ecfbc;
    margin-right: 20px;
    margin-top: 30px;
    padding: 14px;
    border-radius: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
`

export const You = styled.li`
    justify-self: flex-start;
    align-self: flex-start;
    font-size: 16px;
    width: 260px;
    background-color: #c9df8a;
    margin-left: 20px;
    margin-top: 30px;
    padding: 14px;
    border-radius: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
`