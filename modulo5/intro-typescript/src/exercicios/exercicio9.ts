const exercicio9 = (
  idade: number,
  completouEscola: boolean,
  horaDisponivel: number,
  periodo: string
): boolean => {
  if (periodo === 'noturno') {
    if (idade >= 18 && completouEscola === true && horaDisponivel >= 20) {
      return true
    } else {
      return false
    }
  } else if (periodo === 'integral') {
    if (idade >= 18 && completouEscola === true && horaDisponivel >= 40) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export default exercicio9