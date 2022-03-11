import React from 'react'
import ReactPlayer from 'react-player'
import * as Styled from './style'
import { BiPlay, BiPause } from 'react-icons/bi'

class Player extends React.Component {

    changeStatus = () => {
        if (this.props.playStatus()) {
            this.props.playStatus(null)
        } else {
            this.props.playStatus(true)
        }
    }

    iconStatus = () => {
        if (this.props.playStatus()) {
            return <BiPause onClick={() => this.changeStatus()} />
        } else {
            return <BiPlay onClick={() => this.changeStatus()} />
        }
    }

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
                <ReactPlayer url={this.props.playMusic} width={0} playing={this.playAudio()} />
            </Styled.Player>
        )
    }
}

export default Player