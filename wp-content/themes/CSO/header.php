<?php
/**
 * The Header for our theme.
 */
?><!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title><?php wp_title( '|', true, 'right' ); ?></title>
				
		<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css">
		<link rel="stylesheet" href="css/cso.css">
		
		<?php wp_head(); ?>
	</head>
<body <?php body_class(); ?>>
	<nav class="navbar navbar-default navbar-fixed-top" id="navbar">
		<div class="container">
			<div class="navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="navbar-home"><a class="gm-button" href="/"><img class='homelogo' src="raw/logos/logo-gold.png" alt=""></a></li>
					<li class="navbar-about"><a class="gm-button" href="about.html">ABOUT</a></li>
					<li class="navbar-join"><a class="gm-button" href="join.html">JOIN</a></li>
					<li class="navbar-concerts"><a class="gm-button" href="concert-spring2017.html">CONCERTS</a></li>
					<li class="navbar-support"><a class="gm-button" href="support.html">SUPPORT US</a></li>
					<li class="navbar-members"><a class="gm-button" href="members.html">MEMBERS</a></li>
				</ul>			
			</div>
		</div>
	</nav>
	<div class="buffer"></div>
	
