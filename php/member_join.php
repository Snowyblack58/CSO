<?php
	# To WEBMASTER
	$exec_to = "dz6hu@virginia.edu";
	$exec_subject = "[CSO] Join Request";
	$exec_message = "Name: " . $_POST["name"] . "\n" .
		"Email: " . $_POST["email"] . "\n" .
        "This email was generated automatically by the host of cavalierso.com.";
	$exec_headers = "From: join@cavalierso.com";
	mail($exec_to, $exec_subject, $exec_message, $exec_headers);
?>