import express from 'express';
import AutomovelService from '../services/automoveis.service.js';

const automovelRoute = express.Router();

automovelRoute
    .get("/automoveis/busca", AutomovelService.listCar)
    .get("/automoveis/:id", AutomovelService.listById)
    .post("/automoveis", AutomovelService.registerCar)
    .put("/automoveis/:id", AutomovelService.updateCar)
    .delete("/automoveis/:id", AutomovelService.deleteCar)

export default automovelRoute;