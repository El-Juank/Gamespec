<?php
$string = "Así podría haber sido Xbox Series S: Microsoft muestra unos prototipos de 2017";

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