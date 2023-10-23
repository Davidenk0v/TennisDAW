const Player = require('./Player');

test('Crear jugador', () => {
    const jugador1 = new Player('Pepe', 0);
    expect(jugador1.name).toEqual('Pepe', 0);
})


test('Crear jugador con ranking', () => {
    const jugador1 = new Player('Pepe', 7);
    expect(jugador1.ranking).toBe(7);
})

test('Crear jugador sin indicar el género', () => {
    const jugador1 = new Player('Pepe', 0,);
    expect(jugador1.name).toBe('Pepe')
    expect(jugador1.sex).toBe('Male');
});

test('Crear jugador Male', () => {
    const jugador1 = new Player('Pepe', 0, 'Male');
    expect(jugador1.name).toBe('Pepe')
    expect(jugador1.sex).toBe('Male');
});

test('Crear jugador female por poner un género diferente', () => {
    const jugador1 = new Player('Pepe', 0, 'kkf');
    expect(jugador1.name).toBe('Pepe')
    expect(jugador1.sex).toBe('Female');
})