import express from 'express';
import MotoristaController from '../controller/motoristas.controller.js';

const motoristaRoute = express.Router();

motoristaRoute
    .get("/motoristas/busca", MotoristaController.listMotorist)
    .get("/motoristas/:id", MotoristaController.listById)
    .post("/motoristas", MotoristaController.registerMotorist)
    .put("/motoristas/:id", MotoristaController.updateMotorist)
    .delete("/motoristas/:id", MotoristaController.deleteMotorist)

export default motoristaRoute;