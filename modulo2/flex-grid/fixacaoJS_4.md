```javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let quantidadeNumeros = 0
  
  arrayDeNumeros.forEach(num => {
    if (num === numeroEscolhido) {
      quantidadeNumeros++
    }
  })
  
  if (quantidadeNumeros === 0) {
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${quantidadeNumeros}x`
  }
}

```