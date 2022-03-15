import styled from "styled-components"

export const Card = styled.section`
    width: 60%;
    min-height: 240px;
    max-height: 360px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.20);
    border-radius: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    grid-column: ${props => props.gridColumn};
    grid-row: 2;
    justify-self: center;
    align-self: center;
    
    @media (max-width: 480px) {
        margin-bottom: 40px;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(244, 244, 244, 0.2);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(244, 244, 244, 0.6);
        border-radius: 30px;
    }
`

export const ScrollBottom = styled.div`
    float: left;
    clear: both;
`

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 30px 10px 30px 10px;
    color: #e6e6e6;
    text-shadow: 1px 3px 6px rgba(0, 0, 0, 0.2);

    @media (max-width: 920px) {
        font-size: 18px;
    }

    @media (max-width: 730px) {
        font-size: 16px;
    }

    @media (max-width: 544px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`