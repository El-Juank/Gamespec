var express = require('express') //connectar la llibreria Express i es guarda en la variable espress. Es una llibreria obligatoria, sempre es necessita
var app = express() //Variable principal a la que se li crea una instancia de la llibreria express. Respresenta el servidor
var mysql = require('mysql')
var cors = require('cors')
app.use(cors());
app.get("/", (req, res) => {//s'han de definir una o varies rutes, req = request per recollir les dades, res = resultat de la crida, dades que ha recollit
    //operativa i resposta, per exemple connectar una base de dades i fer un select per recollir les dades
    res.send("MyServer") //Aqui es connectara amb una base de dades en JSON
});
app.get("/insert/user", (req, res) => {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "217.61.130.155",
        user: "admin_games",
        password: "12345678",
        database: "admin_games"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO usuari (usuarinom, usuaricorreu, usuarifoto) VALUES ('"+req.query.nombre+"', '"+req.query.correo+"', '"+req.query.foto+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.header("Content-Type", "application/json");
            res.json({});
            con.end();//Tancar la connexió, és molt important tancar-la sempre
        });
    });
});

/**------------------------------------------------------------------------------------------------------- */
app.get("/get/login", (req, res) => {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "217.61.130.155",
        user: "admin_games",
        password: "12345678",
        database: "admin_games"
    });

    con.connect(function(err){//connectar-se(poder fer crides) a la base de dades
        //Recollir si hi ha algun error
        if(err) throw err;
        var correo = req.query.correo;
        var contrasenya = req.query.contrasenya;
        con.query("SELECT * FROM usuari  where usuaricorreu='"+correo+"' and contrasenya='"+contrasenya+"'",function(err,result,fields){//fer consultes SELECT, WHERE, ORDER....
            if(err) throw err;
            //res.send(JSON.stringify(result))
            res.header("Content-Type", "application/json");
            if(result.length>0){
                res.json(result);
                console.log(result);
            }else {
                res.json({});
            }
        
            
            con.end();//Tancar la connexió, és molt important tancar-la sempre
        });
    });""
});
/**------------------------------------------------------------------------------------------------------- */
app.listen(3000,() =>{//port, no volem opcions de servidor
    //no és obligatori posar-hi res
    console.log("Carrot cake")
}); 