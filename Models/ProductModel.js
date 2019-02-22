const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nome: {
        type: String,
        required: true,
        max: 100
    },
    preco: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('products', ProductSchema);