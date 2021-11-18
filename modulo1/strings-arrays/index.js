// // Interpretação de código
// // "a", undefined
// // "b", null
// // "c", 11
// // "d", 3
// // "e", [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // "f", 10
// // "SUBI NUM ÔNIBUS EM MARRICOS", 25

// // Escrita de código
// // #1
// const username = prompt("Digite seu nome"),
// userEmail = prompt("Digite seu e-mail")

// console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${username}`)

// // #2
// const myFavoriteFoods = ["Sushi", "Peixe", "Açai", "Sanduiche", "Pizza"]
// console.log(myFavoriteFoods)

// console.log("Essas são minhas comidas favoritas:") // Não podendo usar o laço for, segue a solução:
// console.log(myFavoriteFoods[0])
// console.log(myFavoriteFoods[1])
// console.log(myFavoriteFoods[2])
// console.log(myFavoriteFoods[3])
// console.log(myFavoriteFoods[4])

// const userFavoriteFood = prompt("Insira sua comida favorita")
// myFavoriteFoods[1] = userFavoriteFood
// console.log(myFavoriteFoods)

// // #3
// let toDoList = []
// toDoList.push(prompt("Insira uma tarefa"))
// toDoList.push(prompt("Insira uma tarefa"))
// toDoList.push(prompt("Insira uma tarefa"))

// console.log(toDoList)

// const taskIndex = Number(prompt("Digite o indice de uma tarefa inserida"))
// toDoList.splice(taskIndex, 1)
// console.log(toDoList)

// Desafios
// #1
const phrase = "Batatinha frita, 1 2 3",
arrayPhrase = phrase.split(' ')
console.log(arrayPhrase)

// #2
const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"],
indexFruit = fruits.indexOf("Abacaxi")
console.log(indexFruit, fruits.length)