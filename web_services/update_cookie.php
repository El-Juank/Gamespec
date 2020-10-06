<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");


if(!isset($_GET['language'])){
    $language = "en";
}
$id = $_GET["id"];

//generamos la consulta
$sql = "SELECT usuariid, usuarinom, usuaricorreu, usuarifoto, contrasenya
FROM usuari  
where usuariid='$id'";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$response = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 

//se colocan las variables que desees de tu tabla
{   $id=$row['usuariid'];
	$nom=$row['usuarinom'];
    $correu=$row['usuaricorreu'];
    $foto=$row['usuarifoto'];

    $response = array('id'=> $id, 'nom'=> $nom, 'correu'=> $correu, 'foto'=> $foto);
    $cookie_name = "user";
    

}
$cookie_name = "user";


//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON

$json_string = json_encode($response);
setcookie($cookie_name, $json_string, time() + (86400 * 30), "/");
echo $json_string;

//Si queremos crear un archivo json, serÃƒÂ­a de esta forma:
/*
$file = 'clientes.json';
file_put_contents($file, $json_string);
*/
?>