import motorista from '../models/motorista.js'

//tratamento de erros

class MotoristaService {

    static listById = ((req, res) => {
        const id = req.params.id;

        motorista.findById(id)
            .exec(
                (err, motoristas) => {
                    if(err) {
                        res.status(400).send({ message: `${ err.message } - Failed to list Motorist` })
                    } else if(motoristas == null) {
                        res.status(201).send({ message: `${ err.message } - Motorist not found` })
                    }else {
                        res.status(200).send(motoristas)
                    }
                }
            )
    })

    static listMotorist = ((req, res) => {
        const { nome } = req.query

        motorista.find({'nome': nome}, {}, (err, motoristas) => {
            if(!err) {
                res.status(200).send(motoristas)
            } else {
                res.status(400).send({ message: `${ err.message } - Failed to list Motorist` })
            }
        })
    })

    static registerMotorist = ((req, res) => {
        const newMotorist = new motorista(req.body)
        motorista.create(newMotorist, (err) => {
            if(err) {
                res.status(500).send({ message: `${ err.message } - Failed to register Motorist` })
            } else {
                res.status(201).send(newMotorist.toJSON())
            }
        })
    })

    static updateMotorist = ((req, res) => {
        const id = req.params.id;
        motorista.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Motorist successfully updated!' })
            } else if(id == null) {
                res.status(201).send({ message: `${ err.message } - Motorist not found` })
            } else {
                res.status(500).send({ message: `${ err.message } - Failed to update Motorist` })
            }
        })
    })

    static deleteMotorist = ((req, res) => {
        const id = req.params.id;
        motorista.findByIdAndRemove(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Motorist successfully delete!' })
            } else {
                res.status(500).send({ message: `${ err.message } -  Failed to delete Motorist` })
            }
        })
    })
}

export default MotoristaService;