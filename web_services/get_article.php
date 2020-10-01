<?php
$server = "217.61.130.155";  $user = "admin_games"; $pass = "12345678";  $bd = "admin_games";

//Creamos la conexiÃƒÂ³n
$conexion = mysqli_connect($server, $user, $pass,$bd) 
or die("Ha sucedido un error inexperado en la conexion de la base de datos");

$url = $_GET["url"];


//generamos la consulta
$sql = "SELECT
`articleid`,
`articlenom`,
`articledata`,
`articlecontigut`,
`portada`,
`url`, `redactorid`, `redactornom`, `redactorimage`, `redactordescripcio`, `redactorfacebook`, `redactortwitter`, `redactorinstagram`
FROM
`articles` A
JOIN redactors R
ON A.redactors_redactorid = R.redactorid
WHERE A.url = '$url'";
mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

if(!$result = mysqli_query($conexion, $sql)) die();

$response = array(); //creamos un array

while($row = mysqli_fetch_array($result)) 

//se colocan las variables que desees de tu tabla
{   $articleid=$row['articleid'];
	$articlenom=$row['articlenom'];
    $articledata=$row['articledata'];
    $articlecontigut=$row['articlecontigut'];
    $portada=$row['portada'];
    $url=$row['url'];
    $redactorid=$row['redactorid'];
    $redactornom=$row['redactornom'];
    $redactorimage=$row['redactorimage'];
    $redactordescripcio=$row['redactordescripcio'];
    $redactorfacebook=$row['redactorfacebook'];
    $redactortwitter=$row['redactortwitter'];
    $redactorinstagram=$row['redactorinstagram'];
    

    $response = array('articleid'=> $articleid, 'articlenom'=> $articlenom, 'articledata'=> $articledata, 'articlecontigut'=> $articlecontigut, 'portada'=> $portada, 'url'=> $url, 'redactorid'=> $redactorid, 'redactornom'=> $redactornom, 
    'redactorimage'=> $redactorimage, 'redactordescripcio'=> $redactordescripcio, 'redactorfacebook'=> $redactorfacebook, 'redactortwitter'=> $redactortwitter, 'redactorinstagram'=> $redactorinstagram);

    

}



//desconectamos la base de datos
$close = mysqli_close($conexion) 
or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
  

//Creamos el JSON

$json_string = json_encode($response);

echo $json_string;

//Si queremos crear un archivo json, serÃƒÂ­a de esta forma:
/*
$file = 'clientes.json';
file_put_contents($file, $json_string);
*/
function limpiar_acentos_caracteres($s)
	{
	$s = preg_replace("/[äáàâãª]/","a",$s);
	$s = preg_replace("/[ÄÁÀÂÃ]/","A",$s);
	$s = preg_replace("/[ÏÍÌÎ]/","I",$s);
	$s = preg_replace("/[ïíìî]/","i",$s);
	$s = preg_replace("/[ëéèê]/","e",$s);
	$s = preg_replace("/[ËÉÈÊ]/","E",$s);
	$s = preg_replace("/[öóòôõº]/","o",$s);
	$s = preg_replace("/[ÖÓÒÔÕ]/","O",$s);
	$s = preg_replace("/[üúùû]/","u",$s);
	$s = preg_replace("/[ÜÚÙÛ]/","U",$s);
	$s = preg_replace("/[çÇ]/","c",$s);
	$s = preg_replace("/[ñÑ]/","n",$s);
	$s = ereg_replace("[()¿?!¡/_´'&,:-=+#.;%@]","",$s);
	$s = str_replace('"',"",$s);
	$s = str_replace('[',"",$s);
	$s = str_replace(']',"",$s);
	$s = str_replace("\\","",$s);
	$s = strtolower(str_replace(" ","-", $s));
	return $s;
	}
?>