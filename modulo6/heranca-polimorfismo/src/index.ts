// Exercício 1
// a) Não seria possível, pois não há um método destinado para tal
// b) Foi impressa 1 vez

class User {
  private id: string
  private email: string
  private name: string
  private password: string

  constructor(id: string, email: string, name: string, password: string) {
    console.log('Chamando o construtor da classe User')
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`
  }
}

const novoUsuario = new User('1', 'teste@email.com', 'Teste', '1234')

// Exercício 2
// a) Foi impressa 1 vez
// b) Foi impressa 2 vezes. Uma vez pelo exercício anterior. Outra vez pelo exercício atual, que extende a classe User

class Customer extends User {
  public purchaseTotal: number = 0
  private creditCard: string

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password)
    console.log('Chamando o construtor da classe Customer')
    this.creditCard = creditCard
  }

  public getCreditCard(): string {
    return this.creditCard
  }
}

const novoCustomer = new Customer(
  '2',
  'customer@email.com',
  'Customer',
  '1234',
  '5678'
)

// Exercício 3
// a) Não é possível, pois a propriedade herdada é private

console.log(novoCustomer.getId())
console.log(novoCustomer.getName())
console.log(novoCustomer.getEmail())
console.log(novoCustomer.purchaseTotal)
console.log(novoCustomer.getCreditCard())

// Exercício 4
console.log(novoCustomer.introduceYourself())

// Exercício 5
console.log(novoCustomer.introduceYourself())

// Polimorfismo
// Exercício 1
// a) Foi possível imprimir todas as propriedades

interface Client {
  name: string
  // Refere-se ao nome do cliente

  registrationNumber: number
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: 'Cliente',
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2
  },
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// Exercício 2
// a) Cannot create an instance of an abstract class
// b) Remover o abstract

abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep
  }
}

// const novoLugar = new Place

// Exercício 3
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep)
  }

  getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep)
  }

  getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep)
  }

  getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

// Exercício 4
// a) Possui todos os métodos e propriedades requisitados em Client e Residence

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep)
  }

  public getCpf(): string {
    return this.cpf
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}

// Exercício 5
// a) A estrutura das duas classes são semelhantes. Pricipalmente pelas propriedades/métodos da interface Client
// b) A diferença está na classe Pai

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}

// Exercício 6
// a) Deve ser filha de Industry, para herdar as propriedades da mesma
// b) Implementa a interface Client, pelo mesmo motivo
// c) Não entendi a pergunta, já que só foi pedido os getters em todas as questões

class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
  }
}
