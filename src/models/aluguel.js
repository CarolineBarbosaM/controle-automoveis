import mongoose from "mongoose";

const AluguelSherma = new mongoose.Schema(
    {
        id: { type: String },
        motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'motoristas', required: true },
        automovel: { type: mongoose.Schema.Types.ObjectId, ref: 'automoveis', required: true },
        motivo: { type: String },
        dt_inicio: { type: Date, required: true },
        dt_terminio: { type: Date }
    },
    {
        versionKey: false
    }
);

const aluguel = mongoose.model('alugueis', AluguelSherma)

export default aluguel;