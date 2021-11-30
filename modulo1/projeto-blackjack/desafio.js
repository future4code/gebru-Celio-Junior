// Project Blackjack

function mainMenu() {
  console.log("Boas vindas ao jogo de Blackjack!")
  if (confirm("Quer iniciar uma nova rodada?")) {
    startGame()
  } else {
    console.log("O jogo acabou")
  }
}

mainMenu()

// Filtrar o nome das cartas
function filterLetters(cards) {
  const filteredLetters = []
  for (let i = 0; i < cards.length; i++) {
    filteredLetters.push(cards[i].text)
  }
  return filteredLetters
}

// Função para calcular a pontuação dos jogadores
function calculateScore(arr) {
  let sum = 0
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i].value
  }
  return sum
}

// Início do jogo
function startGame() {
  const playerCards = [buyCard(), buyCard()]
  const computerCards = [buyCard(), buyCard()]
  let supportVariable = 1

  // Comparar se as duas cartão são "A"
  if (playerCards[0].text[0] === "A" && playerCards[1].text[0] === "A") {
    while (playerCards[0].text[0] === playerCards[1].text[0]) {
      playerCards[0] = buyCard()
      playerCards[1] = buyCard()
    }
  } else if (computerCards[0].text[0] === "A" && computerCards[1].text[0] === "A") {
    while (computerCards[0].text[0] === computerCards[1].text[0]) {
      computerCards[0].text[0] = buyCard()
      computerCards[0].text[1] = buyCard()
    }
  }

  // Calcular pontuação
  let playerScore = calculateScore(playerCards)
  let computerScore = calculateScore(computerCards)

  // Imprimir cartas do jogador
  for (let i = 0; i < playerCards.length; i++) {
    supportVariable += i
    console.log(`Jogador - Carta ${supportVariable.toString()}: ${playerCards[i].text}`)
  }

  // Pontuação do jogador
  console.log(`Sua pontuação é: ${playerScore}`)

  // Cartas do computador
  console.log(`Computador - carta 1: ${computerCards[0].text}`)

  // Jogador comprar cartas
  while (playerScore <= 21) {
    if (confirm("Deseja comprar uma nova carta?")) {
      playerCards.push(buyCard())
      playerScore = calculateScore(playerCards)
      console.log(`Suas cartas: ${filterLetters(playerCards)}`)
      console.log(`Sua nova pontuação é: ${playerScore}`)
    } else {
      break
    }
  }

  // Computador comprar cartas
  while (computerScore <= playerScore) {
    computerCards.push(buyCard())
    computerScore = calculateScore(computerCards)
  }

  // Imprimir cartas e pontuação do computador
  console.log(`Cartas do computador: ${filterLetters(playerCards)}`)
  console.log(`Pontuação do computador: ${computerScore}`)

  // Resultado
  if (playerScore > 21 && computerCards < 21) {
    console.log("Sua pontuação é maior que 21")
    console.log("O computador ganhou!")
  } else if (computerScore > 21 && playerScore < 21) {
    console.log("A pontuação do computador é maior que 21")
    console.log("O jogador ganhou!")
  } else if (playerScore === computerScore) {
    console.log("As pontuações do jogador e do computador são iguais")
    console.log("Empate!")
  } else if (playerScore > computerScore && computerScore != 21) {
    console.log("A pontuação do jogador é maior do que a do computador")
    console.log("O jogador ganhou!")
  } else if (playerScore < computerScore && playerScore != 21) {
    console.log("A pontuação do computador é maior do que a do jogador")
    console.log("O computador ganhou!")
  } else if (playerScore > computerScore || computerScore === 21) {
    console.log("A pontuação do computador é 21")
    console.log("O computador ganhou!")
  } else if (playerScore < computerScore || playerScore === 21) {
    console.log("A pontuação do jogador é 21")
    console.log("O jogador ganhou!")
  }
}
// Fim do jogo