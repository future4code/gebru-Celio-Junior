import React from 'react'
import * as Styled from './styled'
import GlobalStyle from '../globalStyle/globalStyles'
import Header from '../components/Header'
import Chat from '../components/Chat'

const App = () => {

  return (
    <React.Fragment>
      <GlobalStyle />

      <Styled.Layout>
        <Header title='Whatslab' />
        <Chat />
      </Styled.Layout>
    </React.Fragment>
  )
}

export default App
