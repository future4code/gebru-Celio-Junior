import styled from 'styled-components'
import { device } from '../../helpers/mediaQueries'

export const Button = styled.div`
    position: absolute;
    bottom: 10%;
    right: 8%;

    padding: 10px;
    letter-spacing: 1px;
    background-color: ${props => props.theme.coral};
    color: ${props => props.theme.light};
    border-radius: 10px;
    cursor: pointer;

    transform: scale(0.9);
    transition: all 0.2s ease 0s;

    &:hover {
        transform: scale(1);
    }

    @media ${device.mobileS} {
        display: none;
    }

    @media ${device.tablet} {
        display: none;
    }

    @media ${device.laptop} {
        display: block;
    }
`