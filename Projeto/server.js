const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

// serve your css as static
console.log(__dirname)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Home.html");
});