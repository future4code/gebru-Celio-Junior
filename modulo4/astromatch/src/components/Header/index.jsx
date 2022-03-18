import * as Styled from './style'
import Logo from '../../img/logo.svg'
import IconMatches from '../../img/matches.svg'
import { IoReturnUpBack } from 'react-icons/io5'

export const Header = props => {

    if (props.home) {
        return (
            <Styled.Header>
                <Styled.Logo src={Logo} />
                <Styled.Title>Astromatch</Styled.Title>
                <Styled.Matches src={IconMatches} onClick={props.onClick} />
            </Styled.Header>
        )
    } else if (props.matches) {
        return (
            <Styled.Header>
                <Styled.Icon onClick={props.onClick}><IoReturnUpBack size={40} /></Styled.Icon>
                <Styled.Title>Astromatch</Styled.Title>
            </Styled.Header>
        )
    }
}