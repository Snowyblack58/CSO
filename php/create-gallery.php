<?php
    $dir = '../raw/headshots';
    $filenames = scandir($dir);
    foreach($filenames as $filename) {
        if($filename != '.' && $filename != '..'){
            echo '<div class="headshot col-sm-1"><img src=raw/headshots/' . $filename . '></div>';
        }
    }
?>