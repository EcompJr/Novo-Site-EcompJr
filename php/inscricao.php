<?php
$name_of_uploaded_file =basename($_FILES['guia']['name']);
$formData = $_POST;
getFile( $name_of_uploaded_file, $formData );
function getFile( $filename , $formData ) {
	
	$allowedExts = array("csv","pdf");
	$temp = explode(".", $_FILES["guia"]["name"]);
	$extension = end($temp);
	$mimes = array('application/pdf','application/vnd.ms-excel','text/plain','text/csv','text/tsv');
 
	if (in_array($_FILES['guia']['type'],$mimes )
	&& ($_FILES["guia"]["size"] < 2000000)
	&& in_array($extension, $allowedExts))
	  {
	  if ($_FILES["guia"]["error"] > 0)
		{
		echo "Return Code: " . $_FILES["guia"]["error"] . "<br>";
		}
	  else
		{      
			sendMailAsAttachment($_FILES["guia"]["tmp_name"],$_FILES["guia"]["name"],$formData);         
		}
	  }
	else
	  {
	  echo "Invalid file";
	  }  
}
function prepareAttachment( $filename ,$fileorgname) {
	$attachContent = '';
	$file = fopen($filename,"rb");
	$data = fread($file,filesize($filename));
	fclose($file);
	$cvData = chunk_split(base64_encode($data));
	$attachContent .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$fileorgname\"\n" . 
	"Content-Disposition: attachment;\n" . " filename=\"$fileorgname\"\n" . 
	"Content-Transfer-Encoding: base64\n\n" . $cvData . "\n\n";
	return $attachContent;
	
}
function prepareEmail( $formData ) {
	
	// email fields: to, from, subject, and so on
	$to = "kayo@ecompjr.com.br";
	$from = "no-reply@ecompjr.com.br"; 
	$subject ="[PROSEL] Inscrição " . $formData['name']; 
	$message = "Comprovante de Matrícula anexado.";
	$message .= "\nOi, meu nome é ". $formData['name'];
	$message .= "\nMeu endereço de e-mail é ". $formData['email'];
	$message .= "\n\nVou falar um pouco sobre mim,\n".$formData['about'];
	$message .= "\n\nEu quero entrar na ecompjr\n".$formData['message']."\n";
	$headers = "From: $from";
 
	// boundary 
	$semi_rand = md5(time()); 
	$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
 
	// headers for attachment 
	$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
 
	// multipart boundary 
	$message .= "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n"; 
	$message .= "--{$mime_boundary}\n";
	
	$emailData = array (
		'to' => $to,
		'from' => $from,
		'subject' => $subject,
		'headers' => $headers,
		'message' => $message
	);
	return $emailData;
}
function sendMailAsAttachment( $filename, $fileorgname, $formData ) {
	$emailData = prepareEmail( $formData );
	$attachContent = prepareAttachment( $filename,$fileorgname );
	$message = $emailData['message'].$attachContent;
	mail($emailData['to'], $emailData['subject'], $message, $emailData['headers']);
	$confirmation = "Sua inscrição foi recebida!\n\nEntraremos em contato assim que a inscrição for encerrada.\nQualquer dúvida entrar em contato com kayo@ecompjr.com.br.";
	mail($formData['email'],"[EcompJr] Inscrição PROSEL",$confirmation,"From: no-reply@ecompjr.com.br");

}

?>
<script>
	alert("Inscrição realizada");
	window.location= "http://ecompjr.com.br/";
</script>