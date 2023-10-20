const Player = require('./Player');

test('Crear jugador', () => {
    const jugador1 = new Player('Pepe');
    expect(jugador1.name).toEqual('Pepe');
})


test('Crear jugador', () => {
    const jugador1 = new Player('Pepe', 7);
    expect(jugador1.ranking).toBe(7);
})