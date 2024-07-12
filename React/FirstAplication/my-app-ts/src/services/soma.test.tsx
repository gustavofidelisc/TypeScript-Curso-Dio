import { soma, multiplica } from './soma'

describe('soma', ()=> {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toEqual(2)
    })

    it('Deve multiplicar o número por dois', () => {
        const value = multiplica(2, 2)
        expect(value).toEqual(4)
    })

    it ('Deve multiplicar o número por três', () => {
        const value = multiplica(2 , 3)
        expect(value).toEqual(6)
    })

    it ('Deve informar um erro, com o multiplicador de 2 ou 3 ', () =>{
        const value = multiplica(2,4)
        expect(value).toBe('Multiplicador não aceito')
    })
})

//        const value = soma(1)
// o value pode ser considero como arrend e soma é o act