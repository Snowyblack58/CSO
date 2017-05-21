<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Members | Cavalier Symphony Orchestra</title>
		
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css">
		<link rel="stylesheet" href="css/cso.css">
		<link rel="stylesheet" href="css/members.css">
	</head>
	<body>
		<?php include "navbar.html"; ?>
		<section id="dashboard">
			<div class="container">
				<div class="col-sm-9">
					<div id="calendar" class="row">
						<div class="dashboard-tile col-sm-12">
							<div id="calendar-calendar-view" class="col-sm-9">
								<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=oh0frbjakmq0dcpf1582l54350%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FNew_York" style="border-width:0; min-height: 400px" width="100%" frameborder="0" scrolling="no"></iframe>
							</div>
							<div id="calendar-list-view" class="col-sm-3">
								<p class="gm-subheading">Important Dates</p>
								<ul id="dates-list">
<?php
$infile = file_get_contents("edit/dates.json");
$events = json_decode($infile, true);
foreach($events as $event){
	echo "<li>" . $event["name"] . "<br>" . $event["time"] . ", " . $event["date"] . "<br>" . $event["location"] . "</li>";
}
?>
								</ul>
								<p class="gm-subheading">Concert Details</p>
								<ul id="dates-concert">
<?php
$infile = file_get_contents("edit/concerts.json");
$concerts = json_decode($infile, true);
foreach($concerts as $concert){
	echo "<li><p class='gm-body2'>" . $concert["name"] . "<br>" . $concert["time"] . ", " . $concert["date"] . "<br>" . $concert["location"] . "</p></li>";
}
?>
								</ul>
							</div>
						</div>
					</div>
					<div id="announcements" class="row">
						<div class="dashboard-tile col-sm-12">
							<p class="gm-subheading">Announcements</p>
							<ul id="announcements-list">
<?php
$infile = file_get_contents("edit/announcements.json");
$announcements = json_decode($infile, true);
echo sizeof($announcements)==0 ? "<p>No announcements right now. Check in later to see what's up!</p>" : "";
foreach($announcements as $a){
	echo "<li><div class='row'>";
	echo "<div class='gm-caption col-sm-2'>" . $a["author"] . "<br>" . $a["timestamp"] . "</div>";
	echo "<div class='gm-body1 col-sm-10'><span class='gm-body2'>" . $a["title"] . "</span><br>" . $a["body"] . "</div>";
	echo "</div></li>";
}
?>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<div id="music" class="row">
						<div class="dashboard-tile col-sm-12">
							<p class="gm-subheading">Music</p>
							<input id="music-password" type="text" placeholder="Password">
							<input id="music-login" class="gm-button" type="button" value="LOGIN">
							<p id="music-login-caption" class="dashboard-caption"><span class="gm-body2">Forgot the password?</span> Contact an exec member and we'll get you set up!</p>
						</div>
					</div>
					<div id="contacts" class="row">
						<div class="dashboard-tile col-sm-12">
							<p class="gm-subheading">Contact</p>
							<ul id="contacts-list">
<?php

$infile = file_get_contents("edit/contacts.json");
$contacts = json_decode($infile, true);
foreach($contacts as $contact){
	echo "<li>";
	echo "<div class='col-sm-12'>" . $contact["position"] . "<br><div class='indented'>" . $contact["name"] . "<br>" . $contact["email"] . "</div></div>";
	echo "</li>";
}
?>
							</ul>
						</div>
					</div>
					<div id="links" class="row">
						<div class="dashboard-tile col-sm-12">
							<p class="gm-subheading">Links</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<?php include "footer.html"; ?>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	</body>
</html>