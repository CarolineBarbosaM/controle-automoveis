import AutomovelController from '../controller/automoveis.controller.js';

describe('Gerenciar automoveis', () => {

    it('Deve retornar uma lista de automoveis pelo id', () => {
        const result = AutomovelController.listById()
        expect(result).toEqual()
    })

    it('Deve lançar um erro se automovel não for encontrado', () => {
        expect(AutomovelController.listById()).rejects.toThrow()
    })

    it('Deve retornar uma lista de automoveis pela busca', () => {
        const result = AutomovelController.listCar()
        expect(result).toEqual()
    })

    it('Deve lançar um erro se automovel não for encontrado', () => {
        expect(AutomovelController.listCar()).rejects.toThrow()
    })

    it('Deve criar um novo registro de automovel', () => {
        const result = AutomovelController.registerCar()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não consiga cadastrar um novo automovel', () => {
        expect(AutomovelController.registerCar()).rejects.toThrow()
    })

    it('Deve atualizar registro do automovel pelo id', () => {
        const result = AutomovelController.updateCar()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não encontre o automovel', () => {
        expect(AutomovelController.updateCar()).rejects.toThrow()
    })

    it('Deve deletar registro do automovel pelo id', () => {
        const result = AutomovelController.deleteCar()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não encontre o automovel', () => {
        expect(AutomovelController.deleteCar()).rejects.toThrow()
    })
})