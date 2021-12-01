// Interpretação de Código
// 1. O código incrementa a variável i e vai somando o valor dela com a variável valor, 
// armazenando o resultado na mesma. Valor impresso no console: 10

// 2.
// a. Será impresso o 19 em diante.
// Talvez seja possivel, mas há formas mais práticas de se fazer isso.
// b. É suficiente, apesar de não ser o ideal. Para isso, basta criar uma variável de incremento

// 3. *
// 	  **
//    ***
//    ****

// Escrita de Código
// 1.

function one() {
	const havePets = Number(prompt("Quantos bixanos vc tem em casa?"))

	if (havePets === 0) {
		alert("Vai adotar um bixano")
	} else {
		let pets = []
		for (let i = 0; i < havePets; i++) {
			pets.push(prompt("Digite o nome do seu pet"))
		}
		console.log(pets)
	}	
}

// one()

// 1.
function two() {
	const originalArray = [1, 6, 9, 10]

	// a.
	for (let i = 0; i < originalArray.length; i++) {
		console.log(originalArray[i])
	}

	// b.
	for (let i = 0; i < originalArray.length; i++) {
		console.log(originalArray[i] / 10)
	}

	// c.
	let newArray1 = []
	for (let i = 0; i < originalArray.length; i++) {
		if (originalArray[i] % 2 === 0) {
			newArray1.push(originalArray[i])
		}
	}
	console.log(newArray1)

	// d.
	let newArray2 = []
	for (let i = 0; i < originalArray.length; i++) {
		newArray2.push(`O elemento do index ${i} é: ${originalArray[i]}`)
	}
	console.log(newArray2)

	// e.
	let maxValue = 0
	let minValue = 100

	for (let i = 0; i < originalArray.length; i++) {
		if (originalArray[i] > maxValue) {
			maxValue = originalArray[i]
		}

		if (originalArray[i] < minValue) {
			minValue = originalArray[i]
		}
	}

	console.log(`Valor Máximo: ${maxValue}`)
	console.log(`Valor Mínimo: ${minValue}`)
}

// two()

// Desafios
function challenge1() {
	if (confirm("Vamos jogar?")) {
		game()
	} else {
		console.log("Até a próxima!")
	}

	function game() {
		let num1 = Number(prompt("Digite um número"))
		let num2 = 0
		let kicks = 0

		while (num2 != num1) {
			num2 = prompt("Digite outro número")
			kicks++
			if (num2 > num1) {
				console.log(`Menor que ${num2}`)

			} else if (num2 < num1) {
				console.log(`Maior que ${num2}`)
			}
		}

		console.log(`Você acertou!! O número é ${num2}`)
		console.log(`Número de tentativas: ${kicks}`)
	}
}

// challenge1()

function challenge2() {
	if (confirm("Vamos jogar?")) {
		game()
	} else {
		console.log("Até a próxima!")
	}

	function game() {
		let num1 = Math.round(Math.random() * (100 - 1) + 1)
		let num2 = 0
		let kicks = 0

		while (num2 != num1) {
			num2 = prompt("Digite um número")
			kicks++
			if (num2 > num1) {
				console.log(`Menor que ${num2}`)

			} else if (num2 < num1) {
				console.log(`Maior que ${num2}`)
			}
		}

		console.log(`Você acertou!! O número é ${num2}`)
		console.log(`Número de tentativas: ${kicks}`)
	}
}

challenge2()