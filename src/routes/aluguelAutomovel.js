import express from 'express';
import AluguelService from '../services/alugueis.service.js';

const aluguelRoute = express.Router();

aluguelRoute
    .get("/aluguel/:id", AluguelService.list)
    .post("/aluguel", AluguelService.register)
    .put("/aluguel/:id", AluguelService.update)

export default aluguelRoute;