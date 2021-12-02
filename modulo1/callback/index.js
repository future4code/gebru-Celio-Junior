// Interpretação de Código
// 1. No primeiro parametro será impresso cada um dos objetos
// No segundo parâmetro, cada um dos indices(2)
// Terceiro, o array inteiro

// 2. Será impresso o novo array criado apenas com os nomes de usuários

// 3. Será impresso o novo array que contem todos os elementos cujo apelido seja
// 	  diferente de 'Chijo'

// Escrita de código
function exerciceOne() {
	const pets = [
		{name: "Lupin", breed: "Salsicha"},
		{name: "Polly", breed: "Lhasa Apso"},
		{name: "Madame", breed: "Poodle"},
		{name: "Quentinho", breed: "Salsicha"},
		{name: "Fluffy", breed: "Poodle"},
		{name: "Caramelo", breed: "Vira-lata"},
	]

	// a.
	const petsName = pets.map(pet => pet.name)
	console.log(petsName)

	// b.
	const petSalsicha = pets.filter(pet => pet.breed === "Salsicha")
	console.log(petSalsicha)

	// c.
	const petPoodle = pets.filter(pet => pet.breed === "Poodle").map(pet => `Você ganhou um cupom de 10% de desconto para tosas o/a ${pet.name}`)
	console.log(petPoodle)
}

// exerciceOne()

// 2.
function exerciceTwo() {
	const products = [
   { name: "Alface Lavada", category: "Hortifruti", price: 2.5 },
   { name: "Guaraná 2l", category: "Bebidas", price: 7.8 },
   { name: "Veja Multiuso", category: "Limpeza", price: 12.6 },
   { name: "Dúzia de Banana", category: "Hortifruti", price: 5.7 },
   { name: "Leite", category: "Bebidas", price: 2.99 },
   { name: "Cândida", category: "Limpeza", price: 3.30 },
   { name: "Detergente Ypê", category: "Limpeza", price: 2.2 },
   { name: "Vinho Tinto", category: "Bebidas", price: 55 },
   { name: "Berinjela kg", category: "Hortifruti", price: 8.99 },
   { name: "Sabão em Pó Ypê", category: "Limpeza", price: 10.80 }
	]

	// a.
	const productsName = products.map(product => product.name)
	console.log(productsName)

	// b.
	const productsPrice = products.map(product => product.price - (product.price * 0.10))
	const productsDiscount = []
	for (let i = 0; i < products.length; i++) {
		productsDiscount.push({name: productsName[i], price: productsPrice[i].toFixed(2)})
	}
	console.log(productsDiscount)

	// c.
	const productsDrinks = products.filter(product => product.category === "Bebidas")
	console.log(productsDrinks)

	// d.
	const productsYpe = products.filter(product => {
		if (product.name.includes("Ypê")) {
			return product.name
		}
	})
	console.log(productsYpe)

	// e.
	const productsYpe2 = products.filter(product => {
		if (product.name.includes("Ypê")) {
			return product.name
		}
	}).map(product => `Compre ${product.name} por ${product.price}`)
	console.log(productsYpe2)
}

// exerciceTwo()

// Desafio
function challengeOne() {
	const pokemons = [
   { name: "Bulbasaur", type: "grama" },
   { name: "Bellsprout", type: "grama" },
   { name: "Charmander", type: "fogo" },
   { name: "Vulpix", type: "fogo" },
   { name: "Squirtle", type: "água" },
   { name: "Psyduck", type: "água" },
	]

	// a.
	const alphabeticPokemons = pokemons.sort((a, b) => (a.name > b.name) ? 1 : -1)
	console.log(alphabeticPokemons)

	// b.
	const pokemonType = pokemons.map(pokemon => pokemon.type)
	const pokemonTypeNoDuplicate = pokemonType.filter((type, index, array) => array.indexOf(type) === index)
	console.log(pokemonTypeNoDuplicate)
}

challengeOne()