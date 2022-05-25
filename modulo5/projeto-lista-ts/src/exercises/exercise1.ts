export const exercise1 = (name: string, date:string): string => {

  const dateArray = date.split('/')
  const [day, month, year] = [dateArray[0], dateArray[1], dateArray[2]]

  return `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano ${year}`
}