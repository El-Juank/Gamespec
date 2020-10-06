/* ===================================================================
 *
 * Web services Gamespec, projecte final PiCE Girona 2020
 *
 * =================================================================== */

var express = require("express"); //connectar la llibreria Express i es guarda en la variable espress. Es una llibreria obligatoria, sempre es necessita
var app = express(); //Variable principal a la que se li crea una instancia de la llibreria express. Respresenta el servidor
var mysql = require("mysql");
var cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  //s'han de definir una o varies rutes, req = request per recollir les dades, res = resultat de la crida, dades que ha recollit
  //operativa i resposta, per exemple connectar una base de dades i fer un select per recollir les dades
  res.send("El web service està operatiu!"); //Aqui es connectara amb una base de dades en JSON
});

/* WS Per afegir usuaris 
 * -------------------------------------------------------------------------------------------------------*/
app.get("/insert/user", (req, res) => {
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "INSERT INTO usuari (usuarinom, usuaricorreu, usuarifoto) VALUES ('" +
      req.query.nombre +
      "', '" +
      req.query.correo +
      "', '" +
      req.query.foto +
      "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.header("Content-Type", "application/json");
      res.json({});
      con.end(); //Tancar la connexió, és molt important tancar-la sempre
    });
  });
});

/* WS per iniciar sessió
 * -------------------------------------------------------------------------------------------------------*/
app.get("/get/login", (req, res) => {
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });

  con.connect(function (err) {
    //connectar-se(poder fer crides) a la base de dades
    //Recollir si hi ha algun error
    if (err) throw err;
    var correo = req.query.correo;
    var contrasenya = req.query.contrasenya;
    con.query(
      "SELECT * FROM usuari  where usuaricorreu='" +
        correo +
        "' and contrasenya='" +
        contrasenya +
        "'",
      function (err, result, fields) {
        //fer consultes SELECT, WHERE, ORDER....
        if (err) throw err;
        res.header("Content-Type", "application/json");
        if (result.length > 0) {
          res.json(result);
          console.log(result);
        } else {
          res.json({});
        }

        con.end(); //Tancar la connexió, és molt important tancar-la sempre
      }
    );
  });
});

/* WS per agafar els últims articles aka "destacats" (Pàgina "index.html")
 * -------------------------------------------------------------------------------------------------------*/
//WS per agafar el primer
app.get("/destacat1", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Agafem l'últim article ordenat per data
    con.query(
      "SELECT * FROM articles INNER JOIN redactors ON articles.redactors_redactorid=redactors.redactorid ORDER BY articledata LIMIT 1",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});
//WS per agafar els altres 2
app.get("/destacats2i3", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Agafem els últims 2 articles ordenats per data saltant-nos el primer
    con.query(
      "SELECT * FROM articles INNER JOIN redactors ON articles.redactors_redactorid=redactors.redactorid ORDER BY articledata LIMIT 2 OFFSET 1",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

/* WS per agafar tots articles a exepció dels 3 primers (Pàgina "index.html")
 * -------------------------------------------------------------------------------------------------------*/
app.get("/articlesIndex", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Ens saltem els tres primers perque ja estàn a destacats, amb un limit X perque si no no funciona
    con.query(
      "SELECT * FROM articles ORDER BY articledata LIMIT 9 OFFSET 3",
      function (err, result, fields) {
        if (err) throw err;
        res.header("Content-Type", "application/json");
        res.json(result);
        con.end();
      }
    );
  });
});

/* WS per agafar tots articles (Pàgina "articles.html")
 * -------------------------------------------------------------------------------------------------------*/
app.get("/articles", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM articles ORDER BY articledata", function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});

/* WS per agafar els articles de cada redactor (Pàgina "redactor/nom_redactor.html")
 * -------------------------------------------------------------------------------------------------------*/
//Articles de'n Musta
app.get("/articlesMusta", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM articles WHERE redactors_redactorid='1' ORDER BY articledata", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});
//Articles de'n Juan
app.get("/articlesJuan", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM articles WHERE redactors_redactorid='2' ORDER BY articledata", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});
//Articles de la Cris
app.get("/articlesCris", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM articles WHERE redactors_redactorid='3' ORDER BY articledata", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});
//Articles de'n Néstor
app.get("/articlesNestor", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM articles WHERE redactors_redactorid='4' ORDER BY articledata", function (err, result, fields) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});

/* WS per agafar els redactors de la web (Pàgina "about.html")
 * -------------------------------------------------------------------------------------------------------*/
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

/* WS per agafar els jocs (Pàgina "games.html")
 * -------------------------------------------------------------------------------------------------------*/
app.get("/games", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Agafar els jocs i ordenar-los alfabéticament
    con.query("SELECT * FROM jocs INNER JOIN categories ON categories.categoriaid=jocs.categoriaid ORDER BY jocnom ASC ", function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});

/* WS per agafar els jocs (Pàgina "games.html")
 * -------------------------------------------------------------------------------------------------------*/
app.get("/joc", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_games",
    password: "12345678",
    database: "admin_games",
  });
  con.connect(function (err) {
    if (err) throw err;
    //Agafar els jocs i ordenar-los alfabéticament
    con.query("SELECT * FROM jocs WHERE url='"+req.query.url+"'", function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
    
      res.header("Content-Type", "application/json");
      res.status(200).json(result[0]);
      
      con.end();
    });
  });
});


app.listen(3000, () => {
  //port, no volem opcions de servidor
  //no és obligatori posar-hi res
  console.log("La connexió s'ha realitzat amb èxit");
});
