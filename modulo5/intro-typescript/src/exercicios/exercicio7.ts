const exercicio7 = (dna: string): string => {
  const rna = dna
    .replace(/A/g, 'U')
    .replace(/T/g, 'A')
    .replace(/C/g, 'G')
    .replace(/G/g, 'C')
  return rna
}

export default exercicio7
