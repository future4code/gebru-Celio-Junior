import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("retorna false pra [1, 2, 3]", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 3])
    expect(ehDuplicado).toEqual(false)
  })

  test("retorna true pra [1, 2, 1]", () => {
    const ehDuplicado = checaItensDuplicados([1, 2, 1])
    expect(ehDuplicado).toEqual(true)
  })

  test("retorna true pra ['a', 'a', 'b', 'c']", () => {
    const ehDuplicado = checaItensDuplicados(["a", "a", "b", "c"])
    expect(ehDuplicado).toEqual(true)
  })

  test("retorna false pra [1]", () => {
    const ehDuplicado = checaItensDuplicados([1])
    expect(ehDuplicado).toEqual(false)
  })
});
