import React from "react"
import Home from "../pages/Home"
import Playlist from "../pages/Playlist"
import * as Styled from './style'

class App extends React.Component {
  state = {
    page: 'home',
    currentPlaylist: {}
  }

  // Navegar entre páginas
  changePageTo = value => {
    this.setState({ page: value })
  }

  // Playlist atual = Playlist que o usuário clicou
  currentPlaylist = playlistName => {
    this.setState(() => {
      return { currentPlaylist: playlistName }
    })
    return playlistName
  }

  // Renderização condicional que usa a função changePageTo enviando um parametro para navegar entre páginas.
  // Também são enviadas e recebidas informações das páginas 
  renderPage = () => {
    if (this.state.page === 'home') {
      return <Home changePageTo={value => this.changePageTo(value)} currentPlaylist={playlist => this.currentPlaylist(playlist)} />
    } else if (this.state.page === 'playlist') {
      return <Playlist changePageTo={value => this.changePageTo(value)} playlistName={this.state.currentPlaylist.name} playlistId={this.state.currentPlaylist.id} />
    }
  }

  render() {
    return (
      <Styled.App>
        {this.renderPage()}
      </Styled.App>
    )
  }
}

export default App;