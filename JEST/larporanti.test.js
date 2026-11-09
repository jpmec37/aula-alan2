const multi = require('./larp2')
describe('larp2.js', ()=>{
test('Verificar se 10*5 é 50', ()=>{
    expect(multi(10,5)).toBe(50)
}),
it('Multi por 0 tem que dar 0', ()=>{
    expect(multi(10,0)).toBe(0)
})
})