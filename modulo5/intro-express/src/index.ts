import express from "express"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("Servidor Rodando...")
})

// Exercício 1
app.get("/", (req, res) => {
  res.send("Exercício 1")
})