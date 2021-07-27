'use strict'

const express = require("express");
const exp = express();
const {MongoClient} = require('mongodb');
const bodyParser = require('body-parser');
const router = express.Router();

exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({extended: false}));

const uri = "mongodb+srv://luana:webbd@cluster0.ai7ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// serve your css as static
console.log(__dirname)
exp.use(express.static(__dirname));

exp.get("/", (req, res) => {
  res.sendFile(__dirname + "/spa.html");
});

//------- Operações do banco de dados -------//
//------- Usuário/Cliente -------//
const registrar = router.post('/', async (req, res) => {
  const user = await client.db("WEB").collection("Clientes").findOne({"email": req.body.email});
  if(user){
    res.status(409).json({ message: "Email já cadastrado!" });
    return;
  }
  client.db("WEB").collection("Clientes").insertOne(req.body);

  res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

const login = router.get('/:nick/:password', async (req, res) => {
  const user = await client.db("WEB").collection("Clientes").findOne({"nick": req.params.nick, "senha": req.params.password});
  const admin = await client.db("WEB").collection("Admins").findOne({"nick": req.params.nick, "senha": req.params.password});
  if(user){
    res.status(201).json({ message: "Bem-vindo!", admin: false});
  }
  else if(admin){
    res.status(201).json({ message: "Bem-vindo!", admin: true});
  }
  else{
    res.status(409).json({ message: "Email ou senha incorretos!", admin: false});
  }
});

//------- Agendamento -------//

const agendar = router.post('/agendar', (req, res) => {
  client.db("WEB").collection("Servicos").insertOne(req.body);
  res.status(201).json({ message: "Agendamento realizado com sucesso!"});
});

//------- Pets -------//

const cadastrar = router.post('/cadastrar', (req, res) => {
  client.db("WEB").collection("Pets").insertOne(req.body);
  res.status(201).json({ message: "Pet cadastrado com sucesso!"});
});

//------- Produtos -------//

const inserir = router.post('/inserir', (req, res) => {
  client.db("WEB").collection("Estoque").insertOne(req.body);
  res.status(201).json({ message: "Produto cadastrado com sucesso!"});
});

exp.use('/users', registrar);
exp.use('/users', login);
exp.use('/services', agendar);
exp.use('/pets', cadastrar);
exp.use('/products', inserir);

exp.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

//------- Conexão com o banco de dados -------//
async function main() {
  try {
    await client.connect();
 
  } catch (e) {
    console.error(e);
  }
}
main().catch(console.error);
