'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtos = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    preco: {
        type: Number,
        required: true
    },
    qtd: {
        type: Number,
        required: true
    }
});


// para as tags, adicionar coisas de filtro! 

module.exports = mongoose.model('Produtos', produtos);