// Interpretação de Código
// #1
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"

// #2
// Vai ser impresso: 
// 1. O objeto cachorro,
// 2. Uma cópia do objeto cachorro com uma alteração no nome,
// 3. Uma cópia do objeto gato com a mudança do nome para "Jubo"
// A sintaxe dos 3 pontos traz a referência de um objeto

// #3
// False
// Undefined
// A propriedade "altura" não foi definida

// Escrita de Código
// #1
function one() {
	const person = {
		name: "Júnior",
		nicknames: ["Juba", "Jú", "Takito"]
	}

	function intro(obj) {
		console.log(`Eu sou ${obj.name}, mas pode me chamar de: ${obj.nicknames}`)
	}

	intro(person)

	const newPerson = {
		...person,
		nicknames: ["Juca", "Junin", "C. Júnior"]
	}

	intro(newPerson)
}

one() // END

// #2
function two() {
	const firstPerson = {name: "Júnior", age: 20, occupation: "Estudante"}
	const secondPerson = {...firstPerson, name: "Shang"}

	function accessObj(obj1, obj2) {
		console.log(obj1.name, obj1.name.length, obj1.age, obj1.occupation, obj1.occupation.length)
		console.log(obj2.name, obj2.name.length, obj2.age, obj2.occupation, obj2.occupation.length)
	}

	accessObj(firstPerson, secondPerson)


}

two() // END

// #3
function three() {
	let cart = []

	const fruit1 = {name: "Abacaxi", availability: true}
	const fruit2 = {name: "Kiwi", availability: true}
	const fruit3 = {name: "Banana", availability: true}

	const toCart = obj => cart.push(obj)
	toCart(fruit1)
	toCart(fruit2)
	toCart(fruit3)

	console.log(cart)

	function isAvaible(obj) {
		obj.availability = !obj.availability
		return obj
	}

	console.log(isAvaible(cart[0]))
}

three() // END

// Desafios
// #1
function challenge1() {
	const name = prompt("Qual o seu nome")
	const age = Number(prompt("Qual a sua idade?"))
	const occupation = prompt("Qual sua profissão?")

	const user = {
		name: name,
		age: age,
		occupation: occupation
	}

	console.log(user, typeof user)
}

// challenge1() // END

// #2
function challenge2() {
	const movie1 = {name: "Les Miserables", release: 2012}
	const movie2 = {name: "The Lord of the Rings", release: 2001}

	console.log(`O primeiro filme foi lançado antes do segundo? ${movie1.release < movie2.release}`)
	console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${movie1.release === movie2.release}`)
}

challenge2() // END