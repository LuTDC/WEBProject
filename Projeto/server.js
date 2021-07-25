const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');

app.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

// serve your css as static
console.log(__dirname)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/spa.html");
});

async function main() {
	const uri = "mongodb+srv://luana:webbd@cluster0.ai7ca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  await client.connect();
  await listDatabases(client);

  try {
    await client.connect();

    await listDatabases(client);
 
  } catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};