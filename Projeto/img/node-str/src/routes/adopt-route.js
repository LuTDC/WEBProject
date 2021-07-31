'use strict';

const express = require('express');

// inicializar o express / app
const router = express.Router();
const controller = require('../controllers/adopt-controller');

//get pra colocar
//put pra atualizar
//post pra enviar
//delete pra excluir
//request, response, next

//200 - OK!, 201 - Created, 400 - Bad request, 401 - not auth
//403 - Negated acess, 500 - internal server error

router.get('/', controller.get);
router.post('/:id', controller.post);

module.exports = router;