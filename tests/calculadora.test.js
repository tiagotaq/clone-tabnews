const calculadora = require("../models/calculadora");

test("Deve somar 2 + 2 e retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Deve somar 100 + 5 e retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("Ao tentar somar uma string, deve retornar a string 'Erro'", () => {
  const resultado = calculadora.somar("sol", 5);
  expect(resultado).toBe("Erro");
});
