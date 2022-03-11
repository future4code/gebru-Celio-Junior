import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

import * as Styled from './style'

import Header from '../../components/Header'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import SmallCard from '../../components/SmallCard'

import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const authorization = { headers: { Authorization: 'celio-junior-gebru' } }
const urlPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'

export default class Home extends React.Component {
    state = {
        inputPlaylistName: '',
        playlists: [{
            name: ''
        }],
        preventScroll: false,
        clicks: 0
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    // Correção de bug
    // Desmontar componente ao mudar para a página de playlist
    componentWillUnmount() {
        this.setState = () => {
            return
        }
    }

    // Renderiza as playlists ao montar, adicionar ou deletar músicas
    getAllPlaylists = () => {
        axios.get(urlPlaylist, authorization)
            .then(res => {
                this.setState({ playlists: res.data.result.list })
            })
    }

    // Define o estado para o input do usuário e previne para que ao digitar no input
    // A lista de playlist não desça até o último elemento
    setPlaylistName = event => {
        this.setState({ inputPlaylistName: event.target.value })
        this.setState({ preventScroll: false })
    }

    // Verifica se já existe uma playlist com o nome selecionado
    checkRepeated = (element) => {
        const statePlaylists = this.state.playlists
        const findRepeated = statePlaylists.find((playlist) => playlist.name.toLowerCase() === element.toLowerCase())

        // Retorna -1 caso o nome não esteja repetido
        return statePlaylists.indexOf(findRepeated)

    }

    // Salva a playlist do usuário na lista de playlists
    createPlaylist = () => {
        const userInput = this.state.inputPlaylistName
        const repeated = this.checkRepeated(userInput)

        if (repeated === -1) {
            const newPlaylist = {
                id: Math.random(),
                name: userInput
            }

            axios.post(urlPlaylist, newPlaylist, authorization)
                .then(() => {
                    this.getAllPlaylists()
                    this.setState({ inputPlaylistName: '' })
                    this.setState({ preventScroll: true })
                })
                .catch(() => {
                    MySwal.fire({
                        title: 'Erro!',
                        text: `Campo vazio`,
                        icon: 'error',
                        confirmButtonColor: 'rgba(0, 0, 0, 0.8)',
                        allowEnterKey: false,
                        background: 'rgba(230, 230, 230, 0.8)'
                    })
                })
        } else {
            MySwal.fire({
                title: 'Erro!',
                text: `Já existe uma playlist com este nome`,
                icon: 'error',
                confirmButtonColor: 'rgba(0, 0, 0, 0.8)',
                allowEnterKey: false,
                background: 'rgba(230, 230, 230, 0.8)'
            })
            this.setState({ inputPlaylistName: '' })
        }
    }

    // Apaga uma playlist caso o usuário confirme a intenção
    deletePlaylist = (playlistToDelete) => {
        MySwal.fire({
            title: `Quer mesmo deletar a playlist: "${playlistToDelete.name}"?`,
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
                axios.delete(`${urlPlaylist}${playlistToDelete.id}`, authorization)
                    .then(() => {
                        this.getAllPlaylists()
                    })

                MySwal.fire({
                    title: 'Feito!',
                    text: 'Sua playlist foi deletada com sucesso',
                    background: 'rgba(230, 230, 230, 0.8)',
                    confirmButtonColor: 'rgba(0, 0, 0, 0.8)'
                })
            }
        })
    }

    // Permite enviar o formulário ao apertar a tecla Enter
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.createPlaylist()
        }
    }

    // Captura a quantidade de clicks do usuário
    // Caso 1 click, é redirecionado para a página da playlist
    // Caso 2 clicks, chama a função para deletar a playlist
    handleClickPlaylist = playlist => {
        this.setState(state => {
            return { clicks: state.clicks + 1 }
        })

        setTimeout(() => {
            if (this.state.clicks === 1) {
                this.props.currentPlaylist(playlist)
                this.props.changePageTo('playlist')
            } else if (this.state.clicks === 2) {
                this.deletePlaylist(playlist)
            }

            this.setState({ clicks: 0 })
        }, 300)

    }

    render() {
        const playlistNames = this.state.playlists.map((playlist, i) => {
            if (playlist.name === '') {
                return null
            } else if (i % 2 === 0) {
                return <SmallCard key={playlist.id} light mainName={playlist.name} onClick={() => this.handleClickPlaylist(playlist)} />
            } else {
                return <SmallCard key={playlist.id} mainName={playlist.name} onClick={() => this.handleClickPlaylist(playlist)} />
            }
        })

        return (
            <Styled.Layout>
                <Header />
                <Card inputOne button
                    value1={this.state.inputPlaylistName}
                    title='Criar uma Playlist'
                    placeholder1='Insira o nome da playlist'
                    onChange1={e => this.setPlaylistName(e)}
                    onClick={this.createPlaylist}
                    onKeyDown={e => this.handleKeyDown(e)} />

                <Card
                    title='Suas Playlists'
                    content={playlistNames}
                    preventScroll={this.state.preventScroll} />

                <Footer
                    title='Guia de Uso:'
                    itemLeft='Todos os campos devem estar preenchidos para os dados serem enviados.'
                    itemCenter='Suas playlists ficarão salvas mesmo que atualize ou feche a página.'
                    itemRight='Clique 2x em uma playlist ou música para apagá-la.' />
            </Styled.Layout>
        )
    }
}