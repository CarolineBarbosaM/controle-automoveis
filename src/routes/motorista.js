import express from 'express';
import MotoristaService from '../services/motoristas.service';

const motoristaRoute = express.Router();

motoristaRoute
    .get("/motoristas/busca", MotoristaService.listMotorist)
    .get("/motoristas/:id", MotoristaService.listById)
    .post("/motoristas", MotoristaService.registerMotorist)
    .put("/motoristas/:id", MotoristaService.updateMotorist)
    .delete("/motoristas/:id", MotoristaService.deleteMotorist)

export default motoristaRoute;