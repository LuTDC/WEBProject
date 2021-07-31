'use strict';

const mongoose = require('mongoose');
require('../models/user')
const Clientes = mongoose.model('Clientes');

//get everything
exports.get = (req, res, next) => {
    Clientes
        .find({ }, 'nome apelido email endereco telefone senha check admin')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao encontrar usuarios',
                data: e
            });
        });
}

exports.login = (req, res, next) => {
    let user = Clientes
        .findOne({"apelido": req.params.apelido, "senha": req.params.password})
        .then(data => {

            //console.log(data);

            if(data.admin == null){
                res.status(401).json({ message: "Email ou senha incorretos!", admin: false});
            }
            else if(data.admin){
                res.status(200).json({ message: "Bem-vindo!", admin: true});
            }
            else{
                res.status(200).json({ message: "Bem-vindo!", admin: false});
            }

            

            //res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao encontrar qualquer coisa',
                data: e
            });
        });
}

exports.post = (req, res, next) => {
    let clientes = new Clientes(req.body);

    //product.title = req.body.title;

    clientes
        .save()
        .then(x => {
            //produto cadastrado com sucesso
            res.status(201).send("Produto cadastrado com sucesso!");
        }).catch(e => {
            //falha ao cadastrar produto
            res.status(400).send(req.body);
        });
    //res.status(201).send(req.body);
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