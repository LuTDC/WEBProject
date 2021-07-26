'use strict'

const express = require("express");
const exp = express();
const {MongoClient} = require('mongodb');
const bodyParser = require('body-parser');
const router = express.Router();

//const mongo = require('mongodb');

//const MongoClient = mongo.MongoClient;

exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({extended: false}));

const uri = "mongodb+srv://luana:webbd@cluster0.ai7ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//------- Conexão com o servidor -------//
exp.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

// serve your css as static
console.log(__dirname)
exp.use(express.static(__dirname));

exp.get("/", (req, res) => {
  res.sendFile(__dirname + "/spa.html");
});
//------- Conexão com o banco de dados -------//
async function main() {
	await client.connect();
  exp.use('/', insert);

  try {
    await client.connect();
 
  } catch (e) {
    console.error(e);
  }
}
main().catch(console.error);

//------- Operações do banco de dados -------//
const insert = router.post('/', (req, res) => {
  client.db("WEB").collection("WEBDB").insertOne(req.body);
});