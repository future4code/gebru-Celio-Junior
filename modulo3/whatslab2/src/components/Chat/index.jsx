import React from 'react'
import * as Styled from './styled'
import UserInput from '../UserInput'

class Chat extends React.Component {
    state = {
        username: '',
        text: '',
        chat: [{ id: '', username: '', text: '' }]
    }

    inputUsername = e => {
        this.setState({ username: e.target.value })
    }

    inputText = e => {
        this.setState({ text: e.target.value })
    }

    sendMessage = () => {
        const newMessage = {
            id: Math.random(),
            username: this.state.username,
            text: this.state.text
        }

        const copyChat = [...this.state.chat, newMessage]

        this.setState({ chat: copyChat })

        // Limpar digitação
        this.setState({ text: '' })
    }

    // Enviar mensagem com a tecla Enter
    handleKeyDown = e => {
        if (e.key === 'Enter') {
            this.sendMessage()
        }
    }

    render() {
        const messages = this.state.chat.map(message => {
            if (message.username === 'Eu' || message.username === 'eu') {
                return (
                    <Styled.Me key={message.id}>
                        <Styled.Username>{message.username}:</Styled.Username>
                        {message.text}
                    </Styled.Me>
                )
            } else {
                if (message.username === '') { return } // Se o campo username estiver vazio

                return (
                    <Styled.You key={message.id}>
                        <Styled.Username>{message.username}:</Styled.Username>
                        {message.text}
                    </Styled.You>
                )
            }
        })

        return (
            <React.Fragment>
                <Styled.Chat>
                    {messages}
                </Styled.Chat>
                <UserInput
                    valueUsername={this.state.username}
                    onChangeUsername={e => this.inputUsername(e)}
                    valueMessage={this.state.text}
                    onChangeMessage={e => this.inputText(e)}
                    onClickButton={this.sendMessage}
                    onKeyDown={e => this.handleKeyDown(e)} />
            </React.Fragment>
        )
    }
}

export default Chat
