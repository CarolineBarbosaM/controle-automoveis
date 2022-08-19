import express from 'express';
import automovelRoute from './automovel.js';
import motoristaRoute from './motorista.js';
import aluguelRoute from './aluguelAutomovel.js';


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Web API para controle de veiculos')
    })

    app.use(
        express.json(),
        automovelRoute,
        motoristaRoute,
        aluguelRoute
    )
}

export default routes;