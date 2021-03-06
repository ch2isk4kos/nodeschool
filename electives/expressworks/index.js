const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.argv[2] || 3000;

// middleware

app.use(
  require("stylus").middleware(
    process.argv[3] || path.join(__dirname, "public")
  )
); // stylus
app.use(express.static(process.argv[3] || path.join(__dirname, "public"))); // static files
app.use(bodyParser.urlencoded({ extended: false })); // body-parser

// pug templates
app.set("view engine", "pug");
app.set("views", process.argv[3] || path.join(__dirname, "templates"));

// Remember that middleware is executed in the order `app.use` is called

// routes
app.get("/", function (req, res) {
  res.end("Landing Page");
});

app.get("/home", function (req, res) {
  // res.end("Hello World!");
  res.render("index", { date: new Date().toDateString() });
});

app.post("/form", function (req, res) {
  let payload = req.body.str.split("").reverse().join("");
  res.send(payload);
});

app.put("/message/:id", function (req, res) {
  let id = req.params.id;
  let str = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex");
  res.send(str);
});

app.get("/search", function (req, res) {
  let query = req.query;
  res.send(query);
});

app.get("/books", function (req, res) {
  let filename = process.argv[3];
  fs.readFile(filename, function (err, data) {
    if (err) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch {
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
