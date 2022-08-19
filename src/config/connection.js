import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Teste-Seidor:6pLYMv2cQJMPnInr@testeseidor.5fqgb2p.mongodb.net/controle-automoveis")

let db = mongoose.connection;

export default db

