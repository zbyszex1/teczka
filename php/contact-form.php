<?php

	$name = trim($_REQUEST['name']);
	$email = trim($_REQUEST['email']);
	$subject = trim($_REQUEST['subject']);
	$message = trim($_REQUEST['message']);

	// if ( isset($_POST) ) {	
		// $post = var_export($_POST, true);
	// } else {
		// $post = '$_POST in not set';
	// }
	// $request = var_export($_REQUEST, true);
	// $server = var_export($_SERVER, true);
	// $log2  = "post: ".      $post.PHP_EOL.
	// $log2  = "request: ".$request.PHP_EOL.
	// $log2  = "server: ".  $server.PHP_EOL.
        // "-------------------------".PHP_EOL;
	// file_put_contents('./log_'.date("j.n.Y").'.log', $log2, FILE_APPEND);

	$emailTo = "zbigniew@sarata.pl";
	if (empty($subject)) {
	    $subject = "Message from teczka.sarata.pl.";
	}
	$sender = "no_reply@sarata.pl";
	
	$emailTo = "zbigniew@sarata.pl";
	$body = "Name: $name \n\n".
			"Email: $email \n\n".
			"Subject: $subject \n\n".
			"Message:\n$message";
	$headers = 'From: '.$sender."\r\n" .
        'Reply-To: '.$email."\r\n";
	$ok = mail($emailTo, $subject, $body, $headers);
	$emailSent = true;
	if ($ok)
	{
		echo '{"data": "SEND"}';
	} else {
		echo '{"error": "wystąpił błąd"}';
	}
	
?>
