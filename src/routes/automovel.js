import express from 'express';
import AutomovelController from '../controller/automoveis.controller.js';

const automovelRoute = express.Router();

automovelRoute
    .get("/automoveis/busca", AutomovelController.listCar)
    .get("/automoveis/:id", AutomovelController.listById)
    .post("/automoveis", AutomovelController.registerCar)
    .put("/automoveis/:id", AutomovelController.updateCar)
    .delete("/automoveis/:id", AutomovelController.deleteCar)

export default automovelRoute;