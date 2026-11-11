import { formatador } from "../functions"
describe('Sanitizador de CPF', ()=>{
test('Sanitizar CPF retirando "." e "-"', ()=>{
    expect(formatador("123.456.789-10")).toBe("12345678910")
})
})
