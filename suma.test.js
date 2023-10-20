const { suma, multiplicar } = require('./suma');


test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
})

test('Multiplicar 2 x 5 es igual a 10', () => {
    expect(multiplicar(2, 5)).toBe(10);
})


