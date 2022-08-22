import mongoose from "mongoose";

const AluguelSherma = new mongoose.Schema(
    {
        id: { type: String },
        motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'motoristas' },
        automovel: { type: mongoose.Schema.Types.ObjectId, ref: 'automovel' },
        motivo: { type: String },
        dt_inicio: { type: Date },
        dt_terminio: { type: Date }
    },
    {
        versionKey: false
    }
);

const aluguel = mongoose.model('alugueis', AluguelSherma)

export default aluguel;