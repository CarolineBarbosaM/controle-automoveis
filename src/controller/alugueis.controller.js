import aluguel from '../models/aluguel.js';
class AluguelController {

    static list = (req, res) => {
        const id = req.params.id;
        aluguel.findById(id)
            .populate('motorista', 'nome')
            .populate('automovel')
            .exec((err, alugueis) => {
                if (err) {
                    res.status(500).send({ message: `${ err.message } - Failed to list register` })
                } else {
                    res.status(200).send(alugueis)
                }
            })
    }

    static register = ((req, res) => {
        const newRegister = new aluguel(req.body)
        const isRegister = aluguel.find(req.body.motorista)

        if (isRegister.dt_terminio == null) {
            res.status(400).send('Motorist has outstanding rent')
        }

        const newAluguel = {
            motorista: newRegister.motorista,
            automovel: newRegister.automovel,
            dt_inicio: new Date()
        }

        aluguel.create(newAluguel,  (err) => {
            if(err) {
                res.status(500).send({ message: `${ err.message } - Failed to register` })
            } else {
                res.status(201).send({ message: 'Successfully at create new register!' })
            }
        })
    })

    static update = ((req, res) => {
        const id = req.params.id;

        aluguel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Successfully updated!' })
            } else {
                res.status(500).send({ message: `${ err.message } - Failed to update` })
            }
        })
    })
}

export default AluguelController;