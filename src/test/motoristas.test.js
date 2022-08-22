import MotoristaController from '../controller/motoristas.controller.js';
import MotoristaMock from './mocks/motorista.mock.js'

describe('Gerenciar motoristas', () => {

    it('Deve retornar uma lista de motoristas pelo id', () => {
        const result = MotoristaController.listById('6300ffcd7a8f3f571556c953')
        const resulMotorist = {
            "_id": "6300ffcd7a8f3f571556c953",
            "nome": "José Carlos Silva"
        }
        expect(result).toEqual(resulMotorist)
    })

    it('Deve lançar um erro se o motorista não for encontrado', () => {
        expect(MotoristaController.listById(null)).rejects.toThrow()
    })

    it('Deve retornar uma lista de motoristas pela busca', () => {
        const result = MotoristaController.listMotorist('?nome=José Carlos Silva')
        const resulMotorist = {
            "_id": "6300ffcd7a8f3f571556c953",
            "nome": "José Carlos Silva"
        }
        expect(result).toEqual(resulMotorist)
    })

    it('Deve lançar um erro se motorista não for encontrado', () => {
        expect(MotoristaController.listMotorist(null)).rejects.toThrow()
    })

    it('Deve criar um novo registro do motorista', () => {
        const result = MotoristaController.registerMotorist(MotoristaMock.newMotirstMock)
        const resulMotorist = {
            "nome": "Bruno Ferreira Silva",
            "_id": "6303bc5beffffb70d812d138"
        }
        expect(result).toEqual(resulMotorist)
    })

    it('Deve lançar um erro caso não consiga cadastrar um novo motorista', () => {
        expect(MotoristaController.registerMotorist(null)).rejects.toThrow()
    })

    it('Deve atualizar registro do motorista pelo id', () => {
        const result = MotoristaController.updateMotorist('6300ffcd7a8f3f571556c953', MotoristaMock.updateMotirstMock)
        expect(result).toEqual('Motorist successfully updated!')
    })

    it('Deve lançar um erro caso não encontre o motorista', () => {
        expect(MotoristaController.updateMotorist(null)).rejects.toThrow()
    })

    it('Deve deletar registro do motorista pelo id', () => {
        const result = MotoristaController.deleteMotorist('6300ffcd7a8f3f571556c953')
        expect(result).toEqual('Motorist successfully delete!')
    })

    it('Deve lançar um erro caso não encontre o motorista', () => {
        expect(MotoristaController.deleteMotorist(null)).rejects.toThrow()
    })
})