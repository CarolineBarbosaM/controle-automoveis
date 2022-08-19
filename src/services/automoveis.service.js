import automovel from '../models/automovel.js';

//tratamento de erros

class AutomovelService {

    static listById = ((req, res) => {
        const id = req.params.id;

        automovel.findById(id)
            .exec(
                (err, automoveis) => {
                    if(err) {
                        res.status(400).send({ message: `${ err.message } - Failed to list car` })
                    } else if(automoveis == null) {
                        res.status(201).send({ message: `${ err.message } - Car not found` })
                    }else {
                        res.status(200).send(automoveis)
                    }
                }
            )
    })

    static listCar = ((req, res) => {
        const { cor, marca } = req.query

        automovel.find({'cor': cor}, {'marca': marca}, {}, (err, automoveis) => {
            if(!err) {
                res.status(200).send(automoveis)
            } else {
                res.status(400).send({ message: `${ err.message } - Failed to list car` })
            }
        })
    })

    static registerCar = ((req, res) => {
        const newCar = new automovel(req.body)
        automovel.create(newCar, (err) => {
            if(err) {
                res.status(500).send({ message: `${ err.message } - Failed to register car` })
            } else {
                res.status(201).send(newCar.toJSON())
            }
        })
    })

    static updateCar = ((req, res) => {
        const id = req.params.id;
        automovel.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Car successfully updated!' })
            } else if(id == null) {
                res.status(201).send({ message: `${ err.message } - Car not found` })
            } else {
                res.status(500).send({ message: `${ err.message } - Failed to update car` })
            }
        })
    })

    static deleteCar = ((req, res) => {
        const id = req.params.id;
        automovel.findByIdAndRemove(id, (err) => {
            if(!err) {
                res.status(200).send({ message: 'Car successfully delete!' })
            } else {
                res.status(500).send({ message: `${ err.message } -  Failed to delete car` })
            }
        })
    })
}

export default AutomovelService;