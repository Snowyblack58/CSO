<?php
# To MEMBER
$mem_to = $_POST["computingid"] . "@virginia.edu";
$mem_subject = "Welcome to CSO!";
$mem_message = "Hello " . $_POST["name"] . ",\n\n" .
	"test";
$mem_headers = "From: auto@cavalierso.com" . "\r\n" .
	"Reply-To: CavSO@email.virginia.edu";
$mem_email_sent = mail($mem_to, $mem_subject, $mem_message, $mem_headers);
if($mem_email_sent){
	echo "An email has been sent to the provided address";
	# To ADMIN
	$exec_to = "davidzhao058@gmail.com";
	$exec_subject = "[CSO] Join Request";
	$exec_message = "Name: " . $_POST["name"] . "\n" .
		"Email: " . $_POST["computingid"] . "@virginia.edu\n" .
		"Instruments: " . $_POST["instruments"] . "\n" .
		"Year: " . $_POST["year"] . "\n" .
		"Experience: " . $_POST["experience"];
	$exec_headers = "From: join@cavalierso.com";
	mail($exec_to, $exec_subject, $exec_message, $exec_headers);
} else {
	echo "An error occurred. Please try again.";
}

