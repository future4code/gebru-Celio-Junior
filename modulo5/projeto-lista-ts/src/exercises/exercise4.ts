enum DEPARTAMENT {
  MARKETING = 'Marketing',
  SALES = 'Vendas',
  FINANCIAL = 'Financeiro',
}

type Collaborators = {
  name: string
  salary: number
  departament: DEPARTAMENT
  presential: boolean
}[]

const exercise4 = (collaborators: Collaborators): Collaborators => {
  const marketing = collaborators.filter(
    collaborator =>
      collaborator.departament === DEPARTAMENT.MARKETING &&
      collaborator.presential
  )

  return marketing
}

console.log(
  exercise4([
    {
      name: 'Marcos',
      salary: 2500,
      departament: DEPARTAMENT.MARKETING,
      presential: true,
    },
    {
      name: 'Maria',
      salary: 1500,
      departament: DEPARTAMENT.SALES,
      presential: false,
    },
    {
      name: 'Salete',
      salary: 2200,
      departament: DEPARTAMENT.FINANCIAL,
      presential: true,
    },
    {
      name: 'João',
      salary: 2800,
      departament: DEPARTAMENT.MARKETING,
      presential: false,
    },
    {
      name: 'Josué',
      salary: 5500,
      departament: DEPARTAMENT.FINANCIAL,
      presential: true,
    },
    {
      name: 'Natalia',
      salary: 4700,
      departament: DEPARTAMENT.SALES,
      presential: true,
    },
    {
      name: 'Paola',
      salary: 3500,
      departament: DEPARTAMENT.MARKETING,
      presential: true,
    },
  ])
)