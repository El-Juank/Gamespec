<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass, $bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$titol = $_GET["titol"];

$redactorid = "3";
$id = "7";

$statement = mysqli_prepare($conexion, "INSERT INTO articles (usuarinom, redactors_redactorid) VALUES (?, ?)");
echo $statement;
mysqli_stmt_bind_param($statement, "ss", $titol, $redactorid);
mysqli_stmt_execute($statement);

echo $statement;


?>