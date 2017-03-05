<?php
echo '<div class="lc-title-bar">
			<p class="gm-title">January</p>
			<input type="button">
		</div>
		<div class="lc-main">';
$eventfile = json_decode(file_get_contents("../json/calendar.json"), true);
foreach($eventfile as $strdate => $events){
	
//	[{
//	"name": "Sectionals",
//	"time-start": 14,
//	"time-end": 16,
//	"time-min-start": 0,
//	"time-min-end": 0,
//	"place": "New Cabell Basement",
//	"description": "Bring your instrument, a stand, your music, and a pencil.",
//	"type": 1
//},
	date_default_timezone_set("America/New_York");
	
	echo '<div class="lc-day-container">
		<div class="lc-date-container">
			<div class="lc-date">
				<span class="lc-dateofmonth">' . date("j", strtotime($strdate)) . '</span>
				<span class="lc-dayofweek">' . date("D", strtotime($strdate)) . '</span>
			</div>
		</div>
		<div class="lc-events-container month-' . date("n", strtotime($strdate)) . '">';

	foreach($events as $event){
		switch($event["type"]){
			case 1:
				$glyph = "music";
				$event_type = "rehearsal";
				break;
			case 2:
				$glyph = "glass";
				$event_type = "social";
				break;
			default:
				$glyph = "music";
				$event_type = "rehearsal";
				break;
		}
		if($event["time-min-start"] == 0){
			$timestart = (string)$event["time-start"];	
		} else {
			if($event["time-min-start"] < 10){
				$timestart = $event["time-start"] . ":0" . $event["time-min-start"];
			} else {
				$timestart = $event["time-start"] . ":" . $event["time-min-start"];
			}
		}
		
		if($event["time-min-end"] == 0){
			$timeend = (string)$event["time-end"];	
		} else {
			if($event["time-min-end"] < 10){
				$timeend = $event["time-end"] . ":0" . $event["time-min-end"];
			} else {
				$timeend = $event["time-end"] . ":" . $event["time-min-end"];
			}
		}
		
		echo '<div class="lc-event lc-event-' . $event_type . '">
			<span class="glyphicon glyphicon-' . $glyph . '"></span>
			<p class="lc-event-title">' . $event["name"] . '</p>
			<p class="lc-event-quickinfo">' . $timestart .'-' . $timeend . ', '. $event["place"] .'</p>
		</div>';
	}
	echo	'</div>
	</div>';
}
echo '</div>';
?>