import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import * as Styled from './style'

import Header from '../../components/Header'
import Card from '../../components/Card'
import SmallCard from '../../components/SmallCard'
import Player from '../../components/Player'

import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const authorization = { headers: { Authorization: 'celio-junior-gebru' } }
const urlPlaylist = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/`

export default class Playlist extends React.Component {
    state = {
        inputMusicName: '',
        inputArtistName: '',
        inputMusicLink: '',
        playlistTracks: [{
            name: '',
            artist: '',
            url: ''
        }],
        preventScroll: false,
        clicks: 0,
        playMusic: '',
        playStatus: null,
        playMusicName: ''
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    // Correção de bug
    // Desmontar componente ao mudar para a página de playlist
    componentWillUnmount() {
        this.setState = () => {
            return
        }
    }

    // Renderiza as playlists ao montar, adicionar ou deletar músicas
    getPlaylistTracks = () => {
        axios.get(`${urlPlaylist}${this.props.playlistId}/tracks`, authorization)
            .then(res => {
                this.setState({ playlistTracks: res.data.result.tracks })
            })
    }

    // Os 3 sets abaixo capturam a digitação do usuário para armazenar no estado
    setMusicName = e => {
        this.setState({ inputMusicName: e.target.value })
    }

    setArtistName = e => {
        this.setState({ inputArtistName: e.target.value })
    }

    setMusicLink = e => {
        this.setState({ inputMusicLink: e.target.value })
    }

    // Verifica músicas repetidas de um mesmo artista
    checkRepeated = () => {
        const statePlaylist = this.state.playlistTracks
        const findRepeated = statePlaylist.find((music) => {
            if (music.artist.toLowerCase() === this.state.inputArtistName.toLowerCase()) {
                return music.name === this.state.inputMusicName
            }

            return null
        })

        // Retorna -1 caso o nome não esteja repetido
        return statePlaylist.indexOf(findRepeated)

    }

    addTrackToPlaylist = () => {
        // Verifica se todos os campos estão preenchidos
        if (this.state.inputMusicName && this.state.inputArtistName && this.state.inputMusicLink) {
            switch (this.checkRepeated()) {
                case -1:
                    const newSong = {
                        id: Math.random(),
                        name: this.state.inputMusicName,
                        artist: this.state.inputArtistName,
                        url: this.state.inputMusicLink
                    }

                    axios.post(`${urlPlaylist}${this.props.playlistId}/tracks`, newSong, authorization)
                        .then(() => {
                            this.setState({ inputMusicName: '' })
                            this.setState({ inputArtistName: '' })
                            this.setState({ inputMusicLink: '' })

                            this.getPlaylistTracks()
                            this.setState({ preventScroll: true })
                        })
                    break
                default:
                    MySwal.fire({
                        title: 'Erro!',
                        text: `Música já adicionada na playlist`,
                        icon: 'error',
                        confirmButtonColor: 'rgba(0, 0, 0, 0.8)',
                        allowEnterKey: false,
                        background: 'rgba(230, 230, 230, 0.8)'
                    })

                    this.setState({ inputMusicName: '' })
                    this.setState({ inputArtistName: '' })
                    this.setState({ inputMusicLink: '' })
            } // Fechamento do switch case
        } else {
            MySwal.fire({
                title: 'Preencha todos os campos para prosseguir',
                icon: 'error',
                background: 'rgba(230, 230, 230, 0.8)',
                allowEnterKey: false,
                confirmButtonColor: 'rgba(0, 0, 0, 0.8)',
            })
        }
    }

    // Apaga uma Música caso o usuário confirme a intenção
    removeTrackToPlaylist = music => {
        MySwal.fire({
            title: `Quer mesmo deletar a música: "${music.name}"?`,
            showConfirmButton: true,
            confirmButtonText: 'Sim',
            showCancelButton: true,
            cancelButtonText: 'Não',
            background: 'rgba(230, 230, 230, 0.8)',
            cancelButtonColor: 'rgba(0, 0, 0, 0.8)',
            confirmButtonColor: '#9D0F30',
            focusCancel: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${urlPlaylist}${this.props.playlistId}/tracks/${music.id}`, authorization)
                    .then(() => {
                        this.getPlaylistTracks()
                    })

                MySwal.fire({
                    title: 'Feito!',
                    text: 'Sua música foi deletada com sucesso',
                    background: 'rgba(230, 230, 230, 0.8)',
                    confirmButtonColor: 'rgba(0, 0, 0, 0.8)'
                })
            }
        })
    }

    // Permite enviar o formulário ao apertar a tecla Enter
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.addTrackToPlaylist()
        }
    }

    // Captura a quantidade de clicks do usuário
    // Caso 1 click, é redirecionado para a página da playlist
    // Caso 2 clicks, invoca a função para deletar a playlist
    handleClickMusic = musicName => {
        this.setState(state => {
            return { clicks: state.clicks + 1 }
        })

        setTimeout(() => {
            if (this.state.clicks === 1) {
                this.setState({ playMusic: musicName.url })
                this.setState({ playMusicName: musicName.name })
                this.changePlayerStatus(true)
            } else if (this.state.clicks === 2) {
                this.removeTrackToPlaylist(musicName)
            }
            this.setState({ clicks: 0 })
        }, 300)
    }

    // Função ativada ao clicar no botão 'Voltar'
    goHomePage = () => {
        this.props.changePageTo('home')
    }

    // Função usada para modificar o status play ou pause no player
    // Caso true ou null, faz alteração; Caso false, apenas leitura
    changePlayerStatus = bool => {
        if (bool || bool === null) {
            return this.setState({ playStatus: bool })
        } else {
            return this.state.playStatus
        }
    }

    render() {
        const mapPlaylistTracks = this.state.playlistTracks.map((music, i) => {
            if (music.name === '') {
                return null
            } else if (i % 2 === 0) {
                return <SmallCard key={music.id} light mainName={music.name} secondaryName={music.artist} onClick={() => this.handleClickMusic(music)} />
            } else {
                return <SmallCard key={music.id} mainName={music.name} secondaryName={music.artist} onClick={() => this.handleClickMusic(music)} />
            }
        })


        return (
            <Styled.Layout>
                <Header onClick={this.goHomePage} playlistPage />

                <Card inputOne inputTwo inputThree button
                    title='Adicionar Música'
                    placeholder1='Nome da Música'
                    value1={this.state.inputMusicName}
                    onChange1={e => this.setMusicName(e)}
                    placeholder2='Nome do Artista'
                    value2={this.state.inputArtistName}
                    onChange2={e => this.setArtistName(e)}
                    placeholder3='Link para Reprodução'
                    value3={this.state.inputMusicLink}
                    onChange3={e => this.setMusicLink(e)}
                    onClick={() => this.addTrackToPlaylist()}
                    onKeyDown={e => this.handleKeyDown(e)} />

                <Card title={this.props.playlistName} content={mapPlaylistTracks} preventScroll={this.state.preventScroll} />

                <Player playMusic={this.state.playMusic} playStatus={status => this.changePlayerStatus(status)} playMusicName={this.state.playMusicName} />

            </Styled.Layout>
        )
    }
}