// Exercicio 1
// a) O construtor serve para dizermos quais informações queremos receber da instancia da classe. Chamamos usando a palavra reservada "constructor"
// b) A mensagem foi impressa uma vez
// c) Podemos ter acesso a partir de métodos

class UserAccount {
  private cpf: string
  private name: string
  private age: number
  private balance: number = 0
  private transactions: Transaction[] = []

  constructor(cpf: string, name: string, age: number) {
    console.log('Chamando o construtor da classe UserAccount')
    this.cpf = cpf
    this.name = name
    this.age = age
  }

  getCpf = (): string => this.cpf
  getName = (): string => this.name
  getAge = (): number => this.age
  getBalance = (): number => this.balance
  getTransactions = (): Transaction[] => this.transactions

  setTransaction = (newTransaction: Transaction): void => {
    this.transactions.push(newTransaction)
  }
}

const novoUsuario = new UserAccount('08957032541', 'Célio Júnior', 20)

// Exercicio 2
class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
  }

  getDescription = (): string => this.description
  getValue = (): number => this.value
  getDate = (): string => this.date
}

const novaTransacao = new Transaction('Primeira', 100, 'agr')

novoUsuario.setTransaction(novaTransacao)
console.log(novoUsuario.getTransactions())

// Exercicio 3
class Bank {
  private accounts: UserAccount[]

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts
  }
}