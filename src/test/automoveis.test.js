import AutomovelController from '../controller/automoveis.controller.js';
import AutomoveisMock from './mocks/automoveis.mock.js'

describe('Gerenciar automoveis', () => {

    it('Deve retornar uma lista de automoveis pelo id', () => {
        const result = AutomovelController.listById('630153170dce53d909103118')
        const resultAutomovel = {
            "_id": "630153170dce53d909103118",
            "placa": "TEST 0509",
            "cor": "preto",
            "marca": "Fiat"
        }
        expect(result).toEqual(resultAutomovel)
    })

    it('Deve lançar um erro se automovel não for encontrado', () => {
        expect(AutomovelController.listById(null)).rejects.toThrow()
    })

    it('Deve retornar uma lista de automoveis pela busca', () => {
        const result = AutomovelController.listCar('?cor=preto&marca=Fiat')
        const resulAutomovel = {
            "_id": "630153170dce53d909103118",
            "placa": "TEST 0509",
            "cor": "preto",
            "marca": "Fiat"
        }
        expect(result).toEqual(resulAutomovel)
    })

    it('Deve lançar um erro se automovel não for encontrado', () => {
        expect(AutomovelController.listCar(null)).rejects.toThrow()
    })

    it('Deve criar um novo registro de automovel', () => {
        const result = AutomovelController.registerCar(AutomoveisMock.newAutomovelMock)
        expect(result).toEqual('Car successfully register!')
    })

    it('Deve lançar um erro caso não consiga cadastrar um novo automovel', () => {
        expect(AutomovelController.registerCar(null)).rejects.toThrow()
    })

    it('Deve atualizar registro do automovel pelo id', () => {
        const result = AutomovelController.updateCar('630153170dce53d909103118', AutomoveisMock.updateAutomovelMock)
        expect(result).toEqual('Car successfully updated!')
    })

    it('Deve lançar um erro caso não encontre o automovel', () => {
        expect(AutomovelController.updateCar(null)).rejects.toThrow()
    })

    it('Deve deletar registro do automovel pelo id', () => {
        const result = AutomovelController.deleteCar('630153170dce53d909103118')
        expect(result).toEqual('Car successfully delete!')
    })

    it('Deve lançar um erro caso não encontre o automovel', () => {
        expect(AutomovelController.deleteCar(null)).rejects.toThrow()
    })
})