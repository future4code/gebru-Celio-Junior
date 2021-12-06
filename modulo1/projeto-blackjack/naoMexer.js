/**
* NÃO MEXAM NESTE AQUIVO EM HIPÓTESE ALGUMA
*/

function buyCard() {
  // Cria array de cartas
  const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const suits = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const num = cards[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const suit = suits[Math.floor(Math.random() * 4)]

  let value

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (num === "A") {
    value = 11
  } else if (num === "J" || num === "Q" || num === "K") {
    value = 10
  } else { // Se nao for uma das letras, só converte a string para número
    value = Number(num)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const card = {
    text: num + suit,
    value: value
  }

  return card
}