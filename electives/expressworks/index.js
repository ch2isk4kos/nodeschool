const path = require("path");
const express = require("express");
const app = express();

const PORT = process.argv[2] || 3000;

// middleware
app.use(express.static(process.argv[3] || path.join(__dirname, "public")));

// routes
app.get("/", function (req, res) {
  res.end("Home");
});

app.get("/home", function (req, res) {
  res.end("Hello World!");
});

// server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
