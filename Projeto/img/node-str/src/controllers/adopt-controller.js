'use strict';

const mongoose = require('mongoose');
require('../models/adopt')
const Adopt = mongoose.model('Adopt');

exports.get = (req, res, next) => {
    Adopt
        .find({ })
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao encontrar o pet',
                data: e
            });
        });
}

exports.post = (req, res, next) => {
    let adopt = new Adopt(req.body);

    //product.title = req.body.title;

    adopt
        .save()
        .then(x => {
            //produto cadastrado com sucesso
            res.status(201).send("Pet cadastrado com sucesso!");
        }).catch(e => {
            //falha ao cadastrar produto
            console.log(e);
            res.status(400).send(req.body);
        });
    //res.status(201).send(req.body);
};