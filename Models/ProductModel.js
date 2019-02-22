const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AlunoSchema = new Schema({
    nome: {
        type: String,
        required: true,
        max: 100
    },
    ra: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('alunos', AlunoSchema);