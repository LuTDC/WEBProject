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
	//const uri = "mongodb+srv://luana:webbd@cluster0.ai7ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  //const client = new MongoClient(uri);

  await client.connect();
  await listDatabases(client);

  try {
    await client.connect();

    await listDatabases();
 
  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }
}
main().catch(console.error);

//------- Operações do banco de dados -------//
const inserir = router.put('/', (req, res, next) => {
  client.db("WEB").collection("WEBBD").insertOne({name: "Luana"});
});

exp.use('/', inserir);

async function listDatabases(){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};