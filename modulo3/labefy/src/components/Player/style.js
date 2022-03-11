import styled from "styled-components"

export const Player = styled.div`
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    /* display: grid;
    grid-template-columns: 46.5% 53.5%;
    align-items: center; */

    @media (max-height: 600px) {
        flex-direction: row;
        justify-content: center;
    }
`

export const Icon = styled.div`
    margin: 0 6px;
    font-size: 84px;
    height: 84px;
    cursor: pointer;
    color: rgba(244, 244, 244, 1);
    opacity: 0.6;
    display: inline;


    &:hover {
        opacity: 1;
    }
`

export const MusicName = styled.h3`
    font-family: 'Gideon Roman', cursive;
    font-size: 26px;
    font-weight: 300;
    letter-spacing: 1px;
    display: inline;
`