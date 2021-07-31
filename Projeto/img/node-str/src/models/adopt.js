'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adopt = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    apelido: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    raca: {
        type: String,
        required: true
    },
    vacina: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
});


// para as tags, adicionar coisas de filtro! 

module.exports = mongoose.model('Adopt', adopt);