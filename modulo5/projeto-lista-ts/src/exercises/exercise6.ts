type Account = {
  customer: string
  totalBalance: number
  debts: number[]
}[]

const exercise6 = (accounts: Account): Account => {
  const verifyDebts = accounts
    .map(account => {
      const totalDebts = account.debts.reduce((prev, next) => (prev += next), 0)
      account.totalBalance -= totalDebts
      return account
    })
    .filter(account => account.totalBalance < 0)
  return verifyDebts
}

console.log(
  exercise6([
    { customer: 'João', totalBalance: 1000, debts: [100, 200, 300] },
    { customer: 'Paula', totalBalance: 7500, debts: [200, 1040] },
    { customer: 'Pedro', totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
    { customer: 'Luciano', totalBalance: 100, debts: [100, 200, 1700] },
    { customer: 'Artur', totalBalance: 1800, debts: [200, 300] },
    { customer: 'Soter', totalBalance: 1200, debts: [] },
  ])
)