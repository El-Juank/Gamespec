var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("El web service està operatiu!");
});
app.listen(3000, () => {
  console.log("La connexió s'ha realitzat amb èxit");
});
//WS per agafar els redactors de la web
app.get("/redactors", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM redactors", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});