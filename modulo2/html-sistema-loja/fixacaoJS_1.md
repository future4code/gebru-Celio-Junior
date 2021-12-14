```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const valorCarro = valorTotalVendas / qtdeCarrosVendidos
  const comissao = ((valorCarro * (5 / 100)) + 100) * qtdeCarrosVendidos
  if (qtdeCarrosVendidos === 0) {
    return 2000
  } else {
    return 2000 + comissao
  }
}
```