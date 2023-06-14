<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['mensaje'];

$header = 'From: '. $mail . "\r\n";
$header .= 'x-Mailer: PHP/' . phpversion() . "\r\n";
$header .= "Mine-version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message ="este mensaje fue enviado:" . $name ."\r\n";
$message .= "su e-mail es: " . $email . "\r\n";
$message .= "el asunto es: " . $phone . "\r\n";
$message .= "Mensaje: " . $_POST['message'] . "\r\n";
$message .= "enviado el: " .date('d/m/Y' , time());

$para = 'carfastweb@outlook.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($message), $header);

?>




