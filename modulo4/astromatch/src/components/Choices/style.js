import styled from 'styled-components'

export const Choices = styled.section`
    grid-row: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.div`
    color: ${props => props.danger ? props.theme.danger : props.theme.success};
    margin: 0 30px;
    padding: 10px;

    border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 3px solid ${props => props.danger ? props.theme.danger : props.theme.success};
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.danger ? props.theme.danger : props.theme.success};
        color: #FFFFFF;
        transform: scale(0.8);
    }
`