import aluguel from '../models/aluguel.js';

//tratamento de erros
// olhar os casos de cada método com atenção

class AluguelService {

    static list = ((req, res) => {
        const { nome } = req.query

        aluguel.find({'nome': nome}, {}, (err, alugueis) => {
            if(!err) {
                res.status(200).send(alugueis)
            } else {
                res.status(400).send({ message: `${ err.message } - Failed to find record` })
            }
        })
    })

    static register = ((req, res) => {
        const newRegister = new aluguel(req.body)
        aluguel.create(newRegister, (err) => {
            if(err) {
                res.status(500).send({ message: `${ err.message } - Failed to register` })
            } else {
                res.status(201).send(newRegister.toJSON())
            }
        })
    })

    static update = ((req, res) => {
        const id = req.params.id;
        aluguel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Successfully updated!' })
            } else if(id == null) {
                res.status(201).send({ message: `${ err.message } - Registre not found` })
            } else {
                res.status(500).send({ message: `${ err.message } - Failed to update` })
            }
        })
    })
}

export default AluguelService;