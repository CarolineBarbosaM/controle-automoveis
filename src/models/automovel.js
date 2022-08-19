import mongoose from "mongoose";

const AutomovelSherma = new mongoose.Schema(
    {
        id: { type: String },
        placa: { type: String, required: true },
        cor: { type: String, required: true },
        marca: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

const automovel = mongoose.model('automovel', AutomovelSherma)

export default automovel;