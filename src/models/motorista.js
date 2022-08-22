import mongoose from "mongoose";

const MotoristaSherma = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

const motorista = mongoose.model('motoristas', MotoristaSherma)

export default motorista;