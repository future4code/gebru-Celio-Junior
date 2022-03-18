import styled from 'styled-components'
import { device } from '../../helpers/mediaQueries'

export const Header = styled.header`
    grid-row: 1;
    border-bottom: 2px solid ${props => props.theme.coral};

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Logo = styled.img`
    @media ${device.mobileS} {
        width: 30px;
    }

    @media ${device.tablet} {
        width: 50px;
    }

    @media ${device.laptop} {
        width: 40px;
    }
`

export const Title = styled.h1`
    font-family: 'Dancing Script', cursive;
    color: ${props => props.theme.coral};

    @media ${device.mobileS} {
        font-size: 34px;
    }

    @media ${device.tablet} {
        font-size: 40px;
    }

    @media ${device.laptop} {
        font-size: 38px;
    }
`

export const Matches = styled.img`
    cursor: pointer;

    transform: scale(1);
    transition: all 0.2s ease 0s;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.2);
    }

    @media ${device.mobileS} {
        width: 30px;
        height: 30px;
    }

    @media ${device.tablet} {
        width: 40px;
        height: 40px;
    }
`

export const Icon = styled.div`
    transform: scale(1);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }

    color: ${props => props.theme.coral};
    position: absolute;
    left: 20px;
    height: 40px;
`