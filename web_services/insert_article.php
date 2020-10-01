<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$titol = $_POST["titol"];
$portada = $_POST["portada"];
$contingut = $_POST["contingut"];
$data = date('Y-m-d H:i:s');


$url = 

$redactorid = "1";

$statement = mysqli_prepare($conexion, "INSERT INTO articles (articlenom, articledata, articlecontigut, redactors_redactorid, portada, url) VALUES (?, ?, ?, ?, ?, ?)");
mysqli_stmt_bind_param($statement, "ssssss", $titol, $data, $contingut, $redactorid, $portada, poner_guion($titol));
mysqli_stmt_execute($statement);

$response = array();
$last_id = mysqli_insert_id($conexion);
$response = array('id'=> $last_id);


$json_string = json_encode($response);
echo $json_string;


function poner_guion($url){
	$url = strtolower($url);
	//Reemplazamos caracteres especiales latinos
	$find = array('á','é','í','ó','ú','â','ê','î','ô','û','ã','õ','ç','ñ');
	$repl = array('a','e','i','o','u','a','e','i','o','u','a','o','c','n');
	$url = str_replace($find, $repl, $url);
	//Añadimos los guiones
	$find = array(' ', '&', '\r\n', '\n','+');
	$url = str_replace($find, '-', $url);
	//Eliminamos y Reemplazamos los demas caracteres especiales
	$find = array('/[^a-z0-9\-<>]/', '/[\-]+/', '/<{^>*>/');
	$repl = array('', '-', '');
	$url = preg_replace($find, $repl, $url);
	return $url;
   }
	

    
?>