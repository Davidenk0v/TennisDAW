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
    expect(jugador1.sex).toBe('Female');
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
});

test('Crear un jugador con fecha nacimiento', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '13/04/1999')
    expect(jugador1.birthDate).toBe('13/04/1999');
})

test('Crear un jugador con fecha de nacimiento no válida', () => {
    const jugador1 = new Player('Ana', 2, 'Female', 'kakafu');
    expect(jugador1.birthDate).not.toBe('kakafu');
    expect(jugador1.birthDate).toBeUndefined();
})

test('Crear jugador con fecha nacimiento válida', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '01/05/1990')
    expect(jugador1.age).toBe(33);
})

test('Jugador Benjamin', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '01/05/2016')
    expect(jugador1.category).toBe('Benjamin');
})

test('Jugador Cadet', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '01/05/2010')
    expect(jugador1.category).toBe('Cadet');
})

test('Jugador Junior', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '01/05/2004')
    expect(jugador1.category).toBe('Junior');
})

test('Jugador Senior', () => {
    const jugador1 = new Player('Ana', 2, 'Female', '01/05/2000')
    expect(jugador1.category).toBe('Senior');
})