'use strict';

const mongoose = require('mongoose');
require('../models/product')
const Produtos = mongoose.model('Produtos');

exports.get = (req, res, next) => {
    Produtos
        .find({ })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao encontrar o produto',
                data: e
            });
        });
}

exports.post = (req, res, next) => {
    let produtos = new Produtos(req.body);

    //product.title = req.body.title;

    produtos
        .save()
        .then(x => {
            //produto cadastrado com sucesso
            res.status(201).send("Produto cadastrado com sucesso!");
        }).catch(e => {
            //falha ao cadastrar produto
            console.log(e);
            res.status(400).send(req.body);
        });
    //res.status(201).send(req.body);
};

exports.update = (req, res, next) => {
    let produtos = new Produtos(req.body);

    produtos
        .save()
        .then(x => {
            //produto cadastrado com sucesso
            res.status(201).send("Atualizado.");
        }).catch(e => {
            //falha ao cadastrar produto
            console.log(e);
            res.status(400).send(req.body);
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;

    db[id] = req.body;

    res.status(200).send(
        req.body
    );
};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    db[id] = "";

    res.status(200).send();
};