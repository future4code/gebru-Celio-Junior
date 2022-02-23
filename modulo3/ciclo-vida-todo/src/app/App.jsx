import React from 'react'
import GlobalStyle from '../GlobalStyle'
import * as Styled from './styled'

import InputTask from '../components/InputTask/'
import Tasks from '../components/Tasks'

class App extends React.Component {
  state = { 
    currentTask: '',
    tasks: []
  } 

  setTask = e => {
    this.setState({currentTask: e.target.value})
  }

  sendTask = () => {
    const newTask = {
      id: Math.random(),
      item: this.state.currentTask
    }

    const copyTasksArray = [...this.state.tasks, newTask]

    this.setState({tasks: copyTasksArray})
    
    this.setState({currentTask: ''})

  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.sendTask()
    }
  }

  render() {

    return (
      <React.Fragment>
        <GlobalStyle />

        <Styled.Container>
          <InputTask
          value={this.state.currentTask}
          onChange={e => this.setTask(e)}
          onKeyDown={e => this.handleKeyDown(e)} />

          <Tasks listItem={this.state.tasks.map(task => {
            return (
              <Styled.ItemList key={task.id}>
                {task.item}
                <Styled.CompleteTask type='checkbox' />
              </Styled.ItemList>
            )
          })} />
        </Styled.Container>
      </React.Fragment>
    )
  }
}
 
export default App;