import * as Styled from './style'
import Logo from '../../img/Logo.svg'
import React from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

// Alerta acionado ao apertar no botão no centro superior da tela
const EasterEgg = () => {
    MySwal.fire({
        icon: 'info',
        iconColor: 'rgba(0, 0, 0, 0.8)',
        color: '#000',
        background: 'rgba(230, 230, 230, 0.8)',
        text: 'Ferramentas utilizadas: Axios, React-Icons, React-Player, SweetAlert2 e Styled-Components.',
        confirmButtonColor: 'rgba(0, 0, 0, 0.8)',
        footer: 'Feito em React básico.'
    })
}

const Header = props => (
    <React.Fragment>
        <Styled.Title>Labefy</Styled.Title>
        <Styled.Logo src={Logo} onClick={() => EasterEgg()} />
        <Styled.ToBack playlistPage={props.playlistPage} onClick={props.onClick}>Voltar</Styled.ToBack>
    </React.Fragment>
)

export default Header