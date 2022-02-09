import React from 'react'
import Button from '../components/Button'
import * as Styled from './styled'

import Stage1 from '../components/Stage1'
import Stage2 from '../components/Stage2'
import Stage3 from '../components/Stage3'
import Stage4 from '../components/Stage4'

class App extends React.Component {
  
  state = {
    stage: 1
  }

  renderingStage = () => {

    switch(this.state.stage) {
      case 1:
        return <Stage1 />
      case 2:
        return <Stage2 />
      case 3:
        return <Stage3 />
      case 4:
        return <Stage4 />
    }
  }

  nextStage = () => {
    this.setState({stage: this.state.stage + 1})
  }

  render() {
  
    return (
      <Styled.Container>
        {this.renderingStage()}
        <Button 
        value='Enviar'
        onClick={this.nextStage} />
      </Styled.Container>
    )
  }

}

export default App