const path = require("path");
const express = require("express");
const app = express();

const PORT = process.argv[2] || 3000;

// middleware
app.use(express.static(process.argv[3] || path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", process.argv[3] || path.join(__dirname, "templates"));

// routes
app.get("/", function (req, res) {
  res.end("Landing Page");
});

app.get("/home", function (req, res) {
  // res.end("Hello World!");
  res.render("index", { date: new Date().toDateString() });
});

// server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
