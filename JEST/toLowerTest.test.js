const LarpLower = require('./toLarperCase')

describe('DM LOUD', ()=>{
    test('Volta DANIEL MONTEIRO DE ANDRADE minusculo', () =>{
        expect(LarpLower("DANIEL MONTEIRO DE ANDRADE")).toBe("daniel monteiro de andrade")
    })
})