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

// Exercício 2
type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: number | string
  website: string,
  company?: object
}

// Exercício 3
const Users: User[] = [
  {
    id: 1,
    name: "Júnior",
    username: "ceanbrjr",
    email: "celiojunior0110@gmail.com",
    address: {
      street: "Tal",
      city: "Tal"
    },
    phone: "(00) 00000-0000",
    website: "www.meusite.com.br"
  },
  {
    id: 2,
    name: "Júnior 2",
    username: "ceanbrjr 2",
    email: "celiojunior0220@gmail.com",
    address: {
      street: "Tal",
      city: "Tal"
    },
    phone: "(00) 00000-0000",
    website: "www.meusite.com.br"
  },
  {
    id: 3,
    name: "Júnior 3",
    username: "ceanbrjr 3",
    email: "celiojunior0330@gmail.com",
    address: {
      street: "Tal",
      city: "Tal"
    },
    phone: "(00) 00000-0000",
    website: "www.meusite.com.br"
  }
]

// Exercício 4
app.get("/users", (req, res) => {
  res.send(Users)
})

// Exercício 5
type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

// Exercício 6
const Posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "Meu Post",
    body: "Bla bla bla"
  },
  {
    userId: 1,
    id: 2,
    title: "Meu Post 2",
    body: "Bla bla bla"
  },
  {
    userId: 1,
    id: 3,
    title: "Meu Post 3",
    body: "Bla bla bla"
  }
]