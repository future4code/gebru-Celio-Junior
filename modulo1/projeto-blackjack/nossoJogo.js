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

// Start game
function startGame() {
  const cards = {
    player: {
      card1: buyCard(),
      card2: buyCard()
    },
    computer: {
      card1: buyCard(),
      card2: buyCard()
    }
  }

  const playerCard1 = cards.player.card1.text
  const playerCard2 = cards.player.card2.text
  const playerScore = cards.player.card1.value + cards.player.card2.value

  const computerCard1 = cards.computer.card1.text
  const computerCard2 = cards.computer.card2.text
  const computerScore = cards.computer.card1.value + cards.computer.card2.value


  console.log(`Usuário - cartas: ${playerCard1} ${playerCard2} - pontuação ${playerScore}`)
  console.log(`Computador - cartas: ${computerCard1} ${computerCard2} - pontuação ${computerScore}`)

  if (playerScore === computerScore) {
    console.log("Empate!")
  } else if (playerScore > computerScore) {
    console.log("O usuário ganhou!")
  } else if (playerScore < computerScore) {
    console.log("O computador ganhou")
  }

}

// End game