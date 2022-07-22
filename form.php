<?php

$nombre = $_POST ['nombre'];
$mail = $_POST ['correo'];
$telefono = $_POST ['telefono'];
$mensaje = $_POST ['mensaje'];

//como va a llegar

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . ",\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destino = 'lucas_quinteros03@hotmail.com';
$asunto = 'Este mail es enviado desde Portfolio';

//funcion mail
//quien recibe el mail
mail($destino, $asunto, utf8_decode($mensaje), $header);

//redireccion al enviar el form

header('Location:gracias.html');

?>