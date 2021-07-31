'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Conecta ao banco
mongoose.connect('mongodb+srv://Akira:pizza123@cluster0.win0j.mongodb.net/test');

// Carrega os Models
const Product = require('./models/product');

// inicializar o express / app
const app = express();
const router = express.Router();

const cors = require('cors')
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');
const adoptRoute = require('./routes/adopt-route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/adopts', adoptRoute);

module.exports = app;