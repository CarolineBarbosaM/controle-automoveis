import AluguelController from '../controller/alugueis.controller.js';
import AluguelMock from './mocks/aluguel.mock.js'

describe('aluguel de automoveis', () => {

    it('Deve retornar uma lista de alugueis', () => {
        const result = AluguelController.list('')
        const aluguel = {
            "_id": "63015ca7332d1eaefb66a961",
            "motorista": {
                "_id": "63015c5c332d1eaefb66a95e",
                "nome": "Vitoria Maria Barboza da Costa"
            },
            "automovel": {
                "_id": "6301539e0dce53d90910311a",
                "placa": "SUBS 1203",
                "cor": "vermelho",
                "marca": "Renault"
            },
            "dt_inicio": "2022-08-20T22:13:59.085Z"
        }
        expect(result).toEqual(aluguel)
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.list(0)).rejects.toThrow()
    })

    it('Deve retornar uma criar um novo registro de aluguel', () => {
        const result = AluguelController.register(AluguelMock.newAluguelMock)
        expect(result).toEqual('Successfully at create new register!!')
    })

    it('Deve retornar mensagem "Motorist has outstanding rent" se registro estiver ativo', () => {
        const result = AluguelController.register(AluguelMock.aluguelMock)
        expect(result).toBe('Motorist has outstanding rent');
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.register(null)).rejects.toThrow()
    })

    it('Deve atualizar registro de aluguel pelo id', () => {
        const result = AluguelController.update('63015ca7332d1eaefb66a961', )
        expect(result).toEqual('Successfully updated!')
    })

    it('Deve lançar um erro na falta de arquivo', () => {
        expect(AluguelController.update('0')).rejects.toThrow()
    })
})