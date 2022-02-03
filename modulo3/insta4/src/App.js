import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin-top: 10px;
`

const Button = styled.button`
  margin: 10px 0;
`

class App extends React.Component {

  state = {
    inputUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: '',
    arrayPosts: [
      {
        id: 1,
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        id: 2,
        nomeUsuario: 'Jorginho',
        fotoUsuario: 'https://picsum.photos/id/11/50/50',
        fotoPost: 'https://picsum.photos/id/2/200/150'
      },
      {
        id: 3,
        nomeUsuario: 'Claudinha',
        fotoUsuario: 'https://picsum.photos/id/82/50/50',
        fotoPost: 'https://picsum.photos/id/94/200/150'
      }
    ]
  }

  setNomeUsuario = e => {
    this.setState({inputUsuario: e.target.value})
  }

  setFotoPerfil = e => {
    this.setState({inputFotoUsuario: e.target.value})
  }

  setFotoPost = e => {
    this.setState({inputFotoPost: e.target.value})
  }

  postar = () => {
    const novoPost = {
      id: Math.random(),
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const copiaArrayPosts = [...this.state.arrayPosts, novoPost]

    this.setState({arrayPosts: copiaArrayPosts})

  }

  render() {
    const posts = this.state.arrayPosts.map(post => (
      <Post 
        key={post.id}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    ))

    return (
      <MainContainer>
        <Input 
          placeholder='Usuário'
          value={this.state.inputUsuario}
          onChange={e => this.setNomeUsuario(e)}
        />
        <Input 
          placeholder='Link foto perfil'
          value={this.state.inputFotoUsuario}
          onChange={e => this.setFotoPerfil(e)}
        />
        <Input 
          placeholder='Link foto post'
          value={this.state.inputFotoPost}
          onChange={e => this.setFotoPost(e)}
        />
        <Button onClick={this.postar}>Enviar</Button>
        {posts}
      </MainContainer>
    );
  }
}

export default App;