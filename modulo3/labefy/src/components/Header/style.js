import styled from "styled-components"

export const Title = styled.h1`
    grid-column: 1 / 3;
    grid-row: 1;
    margin-left: 60px;
    align-self: center;

    font-family: 'Gideon Roman', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 110%;
    letter-spacing: 6px;

    @media (max-width: 480px) {
        margin: 30px 0;
    }
`

export const Logo = styled.img`
    width: 60px;
    grid-column: 1 / 3;
    grid-row: 1;
    opacity: 0.04;
    justify-self: center;
    align-self: center;
    margin-top: 12px;

    @media (max-width: 700px) {
        display: none;
    }
    
    &:hover {
        opacity: 0.08;
    }
`

export const ToBack = styled.h2`
    display: ${props => props.playlistPage ? 'block' : 'none'};

    grid-column: 1 / 3;
    grid-row: 1;
    align-self: center;
    justify-self: end;
    margin-right: 70px;
    font-weight: 600;
    font-family: 'Gideon Roman', cursive;
    letter-spacing: 1px;
    border: 2px solid rgba(244, 244, 244, 0.6);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    color: rgba(244, 244, 244, 0.9);

    @media (max-width: 480px) {
        margin: 20px 0;
    }

    &:hover {
        background-color: rgba(244, 244, 244, 0.6);
        color: #000;
        font-weight: 800;
    }
`