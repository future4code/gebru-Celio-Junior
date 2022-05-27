export const exercicio1 = () => {
  // const minhaString: string = 123
  const meuNumero: number | string = '123'

  type Person = {
    nome: string,
    idade: number,
    corFavorita: string
  }

  enum Cores {
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    AZUL_ESCURO = 'Azul-Escuro',
    VIOLETA = 'Violeta'
  }

  const eu: Person = {
    nome: 'Júnior',
    idade: 20,
    corFavorita: Cores.AZUL
  }

  const tu: Person = {
    nome: 'Kátia',
    idade: 21,
    corFavorita: Cores.VIOLETA
  }

  const eles: Person = {
    nome: 'Dog',
    idade: 2,
    corFavorita: Cores.LARANJA
  }

  return [meuNumero, eu, tu, eles]
}