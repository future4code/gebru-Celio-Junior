```javascript
function calculaNota(ex, p1, p2) {
  const somaNota = (ex * 1) + (p1 * 2) + (p2 * 3)
  const resultado = somaNota / 6
  
  if (resultado >= 9) {
    return 'A'
  } else if (resultado >= 7.5) {
    return 'B'
  } else if (resultado >= 6) {
    return 'C'
  } else if (resultado < 6) {
    return 'D'
  }
  
}
```