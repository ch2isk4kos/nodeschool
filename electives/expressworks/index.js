const express = require("express");
const app = express();

const PORT = process.argv[2] || 3000;

app.get("/", function (req, res) {
  res.end("Home");
});

app.get("/home", function (req, res) {
  res.end("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
