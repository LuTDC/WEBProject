'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientes = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    apelido: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    },
    telefone: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
    check: {
        type: Boolean,
        required: true,
        default: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Clientes', clientes);