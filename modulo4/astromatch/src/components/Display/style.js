import styled from 'styled-components'
import { device } from '../../helpers/mediaQueries'

export const Display = styled.main`
    margin: auto;
    height: 100vh;
    display: grid;
    grid-template-rows: 70px 1fr 140px;

    background-color: ${props => props.theme.background};
    border-right: 2px solid ${props => props.theme.coral};
    border-left: 2px solid ${props => props.theme.coral};

    
    @media ${device.mobileS} {
        max-width: 420px;
    }

    @media ${device.tablet} {
        max-width: 700px;
    }

    @media ${device.laptop} {
        max-width: 400px;
        height: 94vh;
        
        border: 2px solid ${props => props.theme.coral};
        border-radius: 10px;
        position: absolute;
        top: 0; bottom: 0;
        left: 0; right: 0;
    }
`