'use strict';

const express = require('express');

// inicializar o express / app
const router = express.Router();

// arquivo de rotas. dado uma url, o user chega na nossa app
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;