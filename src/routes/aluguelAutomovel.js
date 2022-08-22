import express from 'express';
import AluguelController from '../controller/alugueis.controller.js';

const aluguelRoute = express.Router();

aluguelRoute
    .get("/aluguel/:id", AluguelController.list)
    .post("/aluguel", AluguelController.register)
    .put("/aluguel/:id", AluguelController.update)

export default aluguelRoute;