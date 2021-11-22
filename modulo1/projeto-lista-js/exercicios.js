// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Insira a altura")),
  largura = Number(prompt("Insira a largura"))

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual")),
  anoNascimento = Number(prompt("Digite o ano de nascimento")),
  Idade = anoAtual - anoNascimento

  console.log(Idade)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Insira seu nome"),
  idade = Number(prompt("Insira sua idade")),
  email = prompt("Insira seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores = []
  cores[0] = prompt("Insira a primeira cor")
  cores[1] = prompt("Insira a segunda cor")
  cores[2] = prompt("Insira a terceira cor")

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let array2 = array.slice()
  array2[array.length - 1] = array[0]
  array2[0] = array[array.length - 1]

  return array2

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Insira o ano atual")),
  anoNascimento = Number(prompt("Insira o ano de seu nascimento")),
  emissaoRG = Number(prompt("Insira o ano de emissão do seu RG")),
  idade = anoAtual - anoNascimento

  if (idade <= 20) {
    console.log((anoAtual - emissaoRG) >= 5)
  } else if (idade > 20 && idade <= 50) {
    console.log((anoAtual - emissaoRG) >= 10)
  } else if (idade > 50) {
    console.log((anoAtual - emissaoRG) >= 15)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  if (ano % 400 === 0) {
    return true
  } else if (ano % 100 === 0 && ano % 4 === 0) {
    return false
  } else if (ano % 4 === 0) {
    return true
  } else {
    return false
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?"),
  escolaridade = prompt("Você possui ensino médio completo?"),
  disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const respostas = [idade.toLowerCase(), escolaridade.toLowerCase(), disponibilidade.toLowerCase()]
  let armazenarRespostasSim = 0

  function eValido() {
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i] === "sim") {
        armazenarRespostasSim++
      }
    }

    return armazenarRespostasSim === 3
  }

  console.log(eValido())

}
