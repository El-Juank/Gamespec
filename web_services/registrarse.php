<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$usuarinom = $_GET["nom"];
$correu = $_GET["correu"];
$contrasenya = $_GET["contrasenya"];

$statement = mysqli_prepare($conexion, "INSERT INTO usuari (usuarinom, usuaricorreu, contrasenya) VALUES (?, ?, ?)");
mysqli_stmt_bind_param($statement, "sss", $usuarinom, $correu , $contrasenya);
mysqli_stmt_execute($statement);

$response = array();
$last_id = mysqli_insert_id($con);
$clientes[] = array('last_id'=> $last_id);

$response["json"] = $clientes;
$json_string = json_encode($response);
echo $json_string;
?>