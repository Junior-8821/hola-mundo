// test.js
const { test } = require('jest');

function suma(a, b) {
  return a + b;
}

test('Suma de 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
