import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Servidor rodando...')
})

// Exercício 1
app.get('/ping', (req, res) => {
  res.send('pong')
})

// Exercício 2
type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

// Exercício 3
const toDos: ToDo[] = [
  {
    userId: 1,
    id: 1,
    title: "Fazer exercício 1",
    completed: true
  },
  {
    userId: 1,
    id: 2,
    title: "Fazer exercício 2",
    completed: true
  },
  {
    userId: 1,
    id: 3,
    title: "Fazer exercício 3",
    completed: false
  },
  {
    userId: 2,
    id: 1,
    title: "Fazer exercício 4",
    completed: false
  }
]