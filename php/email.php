<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
	$to = "ecompjr@uefs.br";

    //send email
    mail($to, "Assunto: ".$subject." de ".$email, $message);
}
?>