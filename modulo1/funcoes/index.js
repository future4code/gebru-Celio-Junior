// Interpretação de Código
// #1
// a. 10
// 	  50
// b. Não acontece absolutamente nada

// #2
// a. A função recebe como paramentro um texto,
// 	  Transforma todas as palavras em minusculas e
//	  Verifica se nele existe a palavra "cenoura"
// 	  Sua utilidade é encontrar uma determinada palavra dentro do texto
// b. i. true
// 	  ii. true
//	  iii. false

// Escrita de Código
// #1
function intro() {
	console.log("Eu sou Célio, tenho 20 anos, moro em Vitória da Conquista e sou estudante")
}

intro()

function intro2(name, age, city, occupation) {
	const userData = `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`
	return userData
}

console.log(intro2("Célio", 20, "Vitória da Conquista", "estudante"))

// #2
const sum = (num1, num2) => num1 + num2
console.log(sum(2, 2))

const comp = (num1, num2) => num1 >= num2
console.log(comp(2, 1))

const itsPair = num1 => num1 % 2 === 0
console.log(itsPair(1))

const modifyText = text => {
	console.log(text.length, text.toUpperCase())
}

modifyText("Esta não é uma mensagem automática")

// #3
const sumAgain = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

console.log(`Números inseridos: 30 e 3`)
console.log(`Soma: ${sumAgain(30, 3)}`)
console.log(`Diferença: ${sub(30, 3)}`)
console.log(`Multiplicação: ${mult(30, 3)}`)
console.log(`Divisão: ${div(30, 3)}`)

// Desafios
// #1
const challenge1 = parameter => console.log(parameter)
const challenge2 = (num1, num2) => {
	const sum = num1 + num2
	challenge1(sum)
}

challenge2(2, 2)

// #2
function pythagoreanTheorem(collared1, collared2) {
	const hypotenuse = Math.pow(collared1, 2) + Math.pow(collared2, 2)
	return Math.sqrt(hypotenuse)
}

console.log(pythagoreanTheorem(3, 4))