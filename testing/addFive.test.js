const addFive = require('./addFive');

test('adds 5 to the given number', ()=>{
    expect(addFive(10)).toBe(15);
    expect(addFive(-3)).toBe(2);
    expect(addFive(0)).toBe(5);
})