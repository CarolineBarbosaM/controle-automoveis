import express from 'express';
import AluguelService from '../services/alugueis.service';

const aluguelRoute = express.Router();

aluguelRoute
    .get("/aluguel/busca", AluguelService.list)
    .post("/aluguel", AluguelService.register)
    .put("/aluguel/:id", AluguelService.update)

export default aluguelRoute;