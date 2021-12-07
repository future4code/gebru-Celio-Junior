// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }

  return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    let temp = array[minIndex]
    array[minIndex] = array[i]
    array[i] = temp
  }

  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
	const arrayPares = []
  for (let i = 0; i < array.length; i++) {
  	if (array[i] % 2 === 0) {
  		arrayPares.push(array[i])
  	}
  }

  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 arrayParesElevados = array.filter(num => num % 2 === 0).map(num => Math.pow(num, 2))
 return arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numMaior = 0
  for (let i = 0; i < array.length; i++) {
  	if (array[i] > numMaior) {
  		numMaior = array[i]
  	}
  }

  return numMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
	// Obter maior número
	const maiorNumero = (num1 > num2) ? num1 : num2
	const menorNumero = (num1 < num2) ? num1 : num2

  // Obter o booleano de maior divisível por menor
  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  // Obter diferença entre o número maior e menor
  const diferenca = maiorNumero - menorNumero

  return {
  	maiorNumero: maiorNumero,
  	maiorDivisivelPorMenor: maiorDivisivelPorMenor,
  	diferenca: diferenca
  }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
	const arrayPares = []
  for (let i = 0; i < n; i++) {
  	arrayPares.push(2 * i)
  }

  return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}