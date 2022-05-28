enum ROLE {
  USER = 'User',
  ADMIN = 'Admin',
}

type Users = {
  name: string
  email: string
  role: ROLE
}[]

const exercise5 = (users: Users): string[] => {
  const admins = users
    .filter(user => user.role === ROLE.ADMIN)
    .map(user => user.email)

  return admins
}

console.log(
  exercise5([
    { name: 'Rogério', email: 'roger@email.com', role: ROLE.USER },
    { name: 'Ademir', email: 'ademir@email.com', role: ROLE.ADMIN },
    { name: 'Aline', email: 'aline@email.com', role: ROLE.USER },
    { name: 'Jéssica', email: 'jessica@email.com', role: ROLE.USER },
    { name: 'Adilson', email: 'adilson@email.com', role: ROLE.USER },
    { name: 'Carina', email: 'carina@email.com', role: ROLE.ADMIN },
  ])
)
