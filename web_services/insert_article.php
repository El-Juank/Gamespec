<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$titol = $_GET["titol"];
$portada = $_GET["portada"];
$contingut = $_GET["contingut"];
$data = date('Y-m-d H:i:s');
echo $data;
$redactorid = "1";

$statement = mysqli_prepare($conexion, "INSERT INTO articles (articlenom, articledata, articlecontigut, redactors_redactorid, portada) VALUES (?, ?, ?, ?, ?)");
mysqli_stmt_bind_param($statement, "sssss", $titol, $data, $contingut, $redactorid, $portada);
mysqli_stmt_execute($statement);

$response = array();
$last_id = mysqli_insert_id($conexion);
$clientes[] = array('last_id'=> $last_id);

$response["json"] = $clientes;
$json_string = json_encode($response);
echo $json_string;
?>