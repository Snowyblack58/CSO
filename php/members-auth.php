<?php
if(strtolower($_POST["email"]) == "dz6hu@virginia.edu"){
	$data = ["isMember" => true];
} else {
	$data = ["isMember" => false];
}
echo json_encode($data);
?>