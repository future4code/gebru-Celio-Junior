import React from 'react'
import ReactPlayer from 'react-player'
import { BiPlay, BiPause } from 'react-icons/bi'
import * as Styled from './style'

class Player extends React.Component {

    // Função chamada no onClick para pausar ou tocar música
    // true = Tocar música; null = Pausar música; 
    // Valor padrão =  null; Valor ao tocar música = true
    changePlayOrPause = () => {
        if (this.props.playStatus()) {
            this.props.playStatus(null) // Se estiver tocando música, pause
        } else {
            this.props.playStatus(true) // Se estiver pausada, play
        }
    }

    // Renderiza o icone de play ou pause a depender do valor da props playStatus
    // Se null, renderiza o botão play; Se true, renderiza botão pause;
    iconStatus = () => {
        if (this.props.playStatus()) {
            return <BiPause onClick={() => this.changePlayOrPause()} />
        } else {
            return <BiPlay onClick={() => this.changePlayOrPause()} />
        }
    }

    // Função que será chamada para tocar ou não a música
    playAudio = () => {
        if (this.props.playStatus()) {
            return true
        } else if (this.props.playStatus() === null) {
            return false
        }
    }

    render() {

        return (
            <Styled.Player>
                <Styled.MusicName>{this.props.playMusicName}</Styled.MusicName>
                <Styled.Icon play>{this.iconStatus()}</Styled.Icon>
                <Styled.PlayerMobile>
                    <ReactPlayer url={this.props.playMusic} width={0} playing={this.playAudio()} /> 
                </Styled.PlayerMobile>
            </Styled.Player>
        )
    }
}

export default Player