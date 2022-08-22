import AluguelController from '../controller/alugueis.controller.js';

describe('aluguel de automoveis', () => {

    it('Deve retornar uma lista de alugueis', () => {
        const result = AluguelController.list()
        expect(result).toEqual()
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.list()).rejects.toThrow()
    })

    it('Deve retornar uma criar um novo registro de aluguel', () => {
        const result = AluguelController.register()
        expect(result).toEqual()
    })

    it('Deve retornar mensagem "Motorist has outstanding rent" se registro já existir', () => {
        const result = AluguelController.register()
        expect(result).toBe('Motorist has outstanding rent');
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.register()).rejects.toThrow()
    })

    it('Deve atualizar registro de aluguel pelo id', () => {
        const result = AluguelController.list()
        expect(result).toEqual()
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.update()).rejects.toThrow()
    })
})