import MotoristaController from '../controller/motoristas.controller.js';

describe('Gerenciar motoristas', () => {

    it('Deve retornar uma lista de motoristas pelo id', () => {
        const result = MotoristaController.listById()
        expect(result).toEqual()
    })

    it('Deve lançar um erro se o motorista não for encontrado', () => {
        expect(MotoristaController.listById()).rejects.toThrow()
    })

    it('Deve retornar uma lista de motoristas pela busca', () => {
        const result = MotoristaController.listMotorist()
        expect(result).toEqual()
    })

    it('Deve lançar um erro se motorista não for encontrado', () => {
        expect(MotoristaController.listMotorist()).rejects.toThrow()
    })

    it('Deve criar um novo registro do motorista', () => {
        const result = MotoristaController.registerMotorist()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não consiga cadastrar um novo motorista', () => {
        expect(MotoristaController.registerMotorist()).rejects.toThrow()
    })

    it('Deve atualizar registro do motorista pelo id', () => {
        const result = MotoristaController.updateMotorist()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não encontre o motorista', () => {
        expect(MotoristaController.updateMotorist()).rejects.toThrow()
    })

    it('Deve deletar registro do motorista pelo id', () => {
        const result = MotoristaController.deleteMotorist()
        expect(result).toEqual()
    })

    it('Deve lançar um erro caso não encontre o motorista', () => {
        expect(MotoristaController.deleteMotorist()).rejects.toThrow()
    })
})