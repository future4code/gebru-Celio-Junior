// EXERCICIO 1 =============================================
// let suaIdade = prompt("Qual a sua idade?")
// let idadeAmigo = prompt("Qual a idade de seu/sua melhor amigo(a)")
// let eMaior = suaIdade > idadeAmigo
// let diferencaIdade = suaIdade - idadeAmigo

// console.log(`Sua idade é maior do que a do seu/sua melhor amigo(a)? ${eMaior}`)
// console.log(`A diferença entre suas idades é de: ${diferencaIdade} anos`)

// EXERCICIO 2 =============================================
// let par = Number(prompt("Insira um número par"))
// console.log(par % 2) // Divisão par por 2 não tem resto
// // Se o usuário inserir um número ímpar, o retorno sempre será 1, pois é o resto da divisão

// EXERCICIO 3 =============================================
// let idade = Number(prompt("Insira sua idade em anos"))
// let idadeMeses = idade * 12
// let idadeDias = idade * 365
// let idadeHoras = idade * (24 * 365)

// console.log(`Você tem ${idadeMeses} meses de idade`)
// console.log(`Ou ${idadeDias} dias de idade`)
// console.log(`Ou ${idadeHoras} horas de idade`)

// EXERCICIO 4 =============================================
// let num1 = Number(prompt("Digite um número"))
// let num2 = Number(prompt("Digite mais um número"))

// console.log(`O primeiro número é maior que o segundo? ${num1 > num2}`)
// console.log(`O primeiro número é igual ao segundo? ${num1 === num2}`)
// console.log(`O primeiro número é divisível pelo segundo? ${(num1 % num2) === 0}`)
// console.log(`O segundo número é divisível pelo primeiro? ${(num2 % num1) === 0}`)

// DESAFIOS ================================================
// 1° ======================================================
// let fahrenheit = 77
// let kelvin = 304
// let celcius = 80

// let fParaK = (fahrenheit - 32) * (5 / 9) + 273.15
// let cParaF = celcius * (9 / 5) + 32
// let kParaC = kelvin - 273.15
// let cParaK = celcius + 273.15

// console.log(`${fahrenheit}°F = ${fParaK}°K`)
// console.log(`${celcius}°C = ${cParaF}°F`)

// celcius = 30
// cParaF = celcius * (9 / 5) + 32
// cParaK = celcius + 273.15

// console.log(`${celcius}°C = ${cParaF}°F ou ${cParaK}°K`)

// celcius = Number(prompt("Insira a temperatura atual em sua região"))
// cParaF = celcius * (9 / 5) + 32
// cParaK = celcius + 273.15

// console.log(`${celcius}°C = ${cParaF}°F ou ${cParaK}°K`)

// 2° ======================================================
// let valorKW = 0.05
// let consumoKW = 280
// let descontoKW = 0.15
// let totalPagar = valorKW * consumoKW
// console.log(`O valor a ser pago pelo consumo de enérgia em sua residência é de R$${totalPagar},00`)
// console.log(`Valor a ser pago com desconto ${totalPagar - (totalPagar * descontoKW)}`)

// 3° ======================================================
let lb = 20
let oz = 10.5
let mi = 100
let ft = 50
let gal = 104.56
let xic = 450

let lbParaKg = lb / 2.205
let ozParaKg = oz / 35.274
let miParaM = mi * 1609
let ftParaM = ft / 3.281
let galParaL = (gal * 473176473) / 125000000
let xicParaL = (xic * 6) / 25

console.log(`${lb}lb equivalem a ${lbParaKg.toFixed(2)}kg`)
console.log(`${oz}oz equivalem a ${ozParaKg.toFixed(2)}kg`)
console.log(`${mi}mi equivalem a ${miParaM}m`)
console.log(`${ft}ft equivalem a ${ftParaM.toFixed(2)}m`)
console.log(`${gal}gal equivalem a ${galParaL.toFixed(2)}L`)
console.log(`${xic}xic equivalem a ${xicParaL.toFixed(2)}L`)
