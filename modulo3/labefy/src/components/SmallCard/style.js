import styled from "styled-components"

export const CardList = styled.li`
    background: ${props => props.light ? 'rgba(244, 244, 244, 0.6)' : 'rgba(180, 180, 180, 0.6)'};
    border-radius: 6px;
    width: 86%;
    min-height: 50px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    padding: 4px 8px;
    text-align: center;
    color: #000;

    @media (max-width: 480px) {
        min-height: 20px;
        padding: 12px;
    }

    &:hover {
        background: ${props => props.light ? 'rgba(220, 220, 220, 0.6);' : 'rgba(160, 160, 160, 0.6)'};
    }
`

export const MainName = styled.h3`
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 1px;

    @media (max-width: 600px) {
        font-size: 16px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export const SecondaryName = styled.h4`
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 1px;

    @media (max-width: 600px) {
        font-size: 10px;
    }
`