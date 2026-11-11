import { verificarIdade } from "../functions"

describe('Verificador de Idade 18+', ()=>{
test('Idade superior 18 anos autorizar', ()=>{
    expect(verificarIdade(20)).toBe("LIBERADO")
})
test('Idade exatamente a 18 anos autorizado', ()=>{
    expect(verificarIdade(18)).toBe("LIBERADO")
})
test('Idade inferior a 18 anos não autorizado', ()=>{
    expect(verificarIdade(15)).toBe("BARRADO")
})
})