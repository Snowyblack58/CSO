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
		
		<title><?php wp_title('|', true, 'right'); ?> Cavalier Symphony Orchestra</title>
				
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="theme-color" content="#ffffff">
		<?php wp_head(); ?>
	</head>
<body <?php body_class(); ?>>
	<nav class="navbar navbar-default navbar-fixed-top" id="navbar">
		<div class="container">
			<div class="navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="navbar-home"><a class="gm-button" href="/"><img class='homelogo' src="http://www.cavalierso.com/wp-content/uploads/2017/10/logo-gold.png" alt=""></a></li>
					<li class="navbar-about"><a class="gm-button" href="http://www.cavalierso.com/about/">ABOUT</a></li>
					<li class="navbar-join"><a class="gm-button" href="http://www.cavalierso.com/join/">JOIN</a></li>
					<li class="navbar-concerts"><a class="gm-button" href="http://www.cavalierso.com/concert/">CONCERT</a></li>
					<li class="navbar-support"><a class="gm-button" href="http://www.cavalierso.com/support/">SUPPORT US</a></li>
					<li class="navbar-members"><a class="gm-button" href="http://www.cavalierso.com/members.html">MEMBERS</a></li>
				</ul>			
			</div>
		</div>
	</nav>
	<div class="buffer"></div>
	
