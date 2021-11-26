// Interpretação de código
// #1
// a. Testar se o número é par
// b. Números pares
// c. Números impares

// #2
// a. Dizer o preço da fruta à partir da entrada do usuário
// b. 2.25
// c. Seria impresso o valor 5.5 e 5

// #3
// a. Recebendo um valor do usuário
// b. Se o número for 10 será impresso os 2 consoles.log
// Se a resposta for -10 o console irá dizer que a variável mensagem não existe

// Escrita de código
// #1
function exerciceOne() {
	const age = Number(prompt("Digite sua idade"))

	if (age >= 18) {
		console.log("Você pode dirigir")
	} else {
		console.log("Você não pode dirigir")
	}	
}

exerciceOne()

// #2
function exerciceTwo() {
	const shift = prompt("Digite 'M' para Matutino, 'V' para Verpertino ou 'N' para Noturno")

	if (shift === "M") {
		console.log("Bom Dia!")
	} else if (shift === "V") {
		console.log("Boa Tarde!")
	} else if (shift === "N") {
		console.log("Boa Noite!")
	}
}

exerciceTwo()

// #3
function exerciceThree() {
	const shift = prompt("Digite 'M' para Matutino, 'V' para Verpertino ou 'N' para Noturno")

	switch (shift) {
		case "M":
		console.log("Bom Dia!")
		break
		case "V":
		console.log("Boa Tarde!")
		break
		case "N":
		console.log("Boa Noite!")
		break
	}	
}

exerciceThree()

// #4
function exerciceFour() {
	const genre = prompt("Qual o gênero do filme?")
	const ticketPrice = Number(prompt("Qual o valor do ingresso?"))
	const littleSnack = prompt("Qual lanchinho você vai comprar?")

	if (genre === "fantasia" && ticketPrice < 15) {
		console.log("Bom filme!")
		console.log(`Aproveite o seu ${littleSnack}`)
	} else {
		console.log("Escolha outro filme :(")
	}
}

exerciceFour()

// Desafios
// #2
function challengeTwo() {
	const name = prompt("Digite seu nome completo")
	const gameType = prompt("IN ou DO")
	const gameStage = prompt("SF, DT ou FI")
	const gameCategory = Number(prompt("1, 2, 3 ou 4"))
	const ticketNumber = Number(prompt("Qual a quantidade de ingressos?"))
	const listOfGame = [name, gameType, gameStage, gameCategory, ticketNumber]

	if (gameType === "DO") {
		switch (gameStage) {
			case "SF":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1.320,00, Total: ${1320 * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 880,00, Total: ${880 * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 550,00, Total: ${550 * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 220,00, Total: ${220 * ticketNumber}`)
				break
				break
			}
			case "DT":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 660,00, Total: ${660 * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 440,00, Total: ${440 * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 330,00, Total: ${330 * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 170,00, Total: ${170 * ticketNumber}`)
				break
				break
			}
			case "FI":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1980,00, Total: ${1980 * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1320,00, Total: ${1320 * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 880,00, Total: ${880 * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 330,00, Total: ${330 * ticketNumber}`)
				break
				break
			}
		}
	} else if (gameType === "IN") {
		switch (gameStage) {
			case "SF":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1.320,00, Total: ${(1320 * 4.10) * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 880,00, Total: ${(880 * 4.10) * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 550,00, Total: ${(550 * 4.10) * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 220,00, Total: ${(220 * 4.10) * ticketNumber}`)
				break
				break
			}
			case "DT":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 660,00, Total: ${(660 * 4.10) * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 440,00, Total: ${(440 * 4.10) * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 330,00, Total: ${(330 * 4.10) * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 170,00, Total: ${(170 * 4.10) * ticketNumber}`)
				break
				break
			}
			case "FI":
			switch (gameCategory) {
				case 1:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1980,00, Total: ${(1980 * 4.10) * ticketNumber}`)
				break
				case 2:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 1320,00, Total: ${(1320 * 4.10) * ticketNumber}`)
				break
				case 3:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 880,00, Total: ${(880 * 4.10) * ticketNumber}`)
				break
				case 4:
				console.log(`Informações: ${listOfGame}`)
				console.log(`Ingresso: 330,00, Total: ${(330 * 4.10) * ticketNumber}`)
				break
				break
			}
		}
	}
}

challengeTwo()