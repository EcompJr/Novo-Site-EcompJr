<?php
	extract($_POST);
	$to = "ecompjr@uefs.br";
	$fullSubject = "Contato $subject:$name:$email";
	$txt = $message;
	$headers = "From: ecompjr@uefs.br" . "\r\n" .
	"CC: $email";
    
    if (@mail($to,$fullSubject,$txt,$headers))
    {
        // Transfer the value 'sent' to ajax function for showing success message.
        echo 'sent';
    }
    else
    {
        // Transfer the value 'failed' to ajax function for showing error message.
        echo 'failed';
    }
?>
