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