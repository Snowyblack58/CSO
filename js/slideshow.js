images = ['IMG_2550_compressed.JPG',
		  'IMG_2627_compressed.JPG',
		  'IMG_2990_compressed.JPG',
		  'IMG_3012_compressed.JPG',
		  'IMG_9399_compressed.png',
		  'IMG_9405_compressed.png',
		  'IMG_9408_compressed.png',
		  'IMG_9425_compressed.png',
		  'IMG_9430_compressed.png'];
index = 0;
transitioning = false;
slideshowInterval = setInterval(function(){slideshowLeft()}, 5000)
intervalSet = true;

$(document).ready(function(){
	$('.slideshow-inactive-left').attr('src','raw/' + images[(index + images.length - 1) % images.length]);
	$('.slideshow-active').attr('src','raw/' + images[index]);
	$('.slideshow-inactive-right').attr('src','raw/' + images[(index + images.length + 1) % images.length]);
});

function slideLeft(){
//	$('.slideshow-active').animate({
//		left: "-=100%"
//	}, 500);
	$('.slideshow-active').css('left','-100%')
//	$('.slideshow-inactive-right').animate({
//		left: "-=100%"
//	}, 500, function(){
	$('.slideshow-inactive-right').css('left','0')
//		transitioning = false;	
//	});
	$('.slideshow-inactive-left').css('left','100%');
	
	$('.slideshow-inactive-left').addClass('in-transition-right');
	$('.slideshow-active').addClass('in-transition-left');
	$('.slideshow-inactive-right').addClass('in-transition-active');
	$('.in-transition-left').removeClass().addClass('slideshow-inactive-left');
	$('.in-transition-active').removeClass().addClass('slideshow-active');
	$('.in-transition-right').removeClass().addClass('slideshow-inactive-right');
	$('.slideshow-inactive-right').attr('src', 'raw/' + images[(index + images.length + 1) % images.length])
	transitioning = false;
}

function slideshowLeft(){
	if(!transitioning){
		transitioning = true;
		index = (index + images.length + 1) % images.length;
		slideLeft();
	}
}

$('.slideshow-left').click(function(){
	slideshowRight();
	clearInterval(slideshowInterval);
	intervalSet = false;
	setTimeout(function(){
		if(!intervalSet){
			intervalSet = true;
			slideshowInterval = setInterval(function(){slideshowLeft()}, 5000)
		}
	}, 15000)
});

function slideRight(){
//	$('.slideshow-active').animate({
//		left: "+=100%"
//	}, 500);
	$('.slideshow-active').css('left','100%')
//	$('.slideshow-inactive-left').animate({
//		left: "+=100%"
//	}, 500, function(){
//		transitioning = false;	
//	});
	$('.slideshow-inactive-left').css('left','0')
	$('.slideshow-inactive-right').css('left','-100%');
	
	$('.slideshow-inactive-left').addClass('in-transition-active');
	$('.slideshow-active').addClass('in-transition-right');
	$('.slideshow-inactive-right').addClass('in-transition-left');
	$('.in-transition-left').removeClass().addClass('slideshow-inactive-left');
	$('.in-transition-active').removeClass().addClass('slideshow-active');
	$('.in-transition-right').removeClass().addClass('slideshow-inactive-right');
	$('.slideshow-inactive-left').attr('src', 'raw/' + images[(index + images.length - 1) % images.length])
	transitioning = false;
}

function slideshowRight(){
	if(!transitioning){
		transitioning = true;
		index = (index + images.length - 1) % images.length;
		slideRight();
	}
}

$('.slideshow-right').click(function(){
	slideshowLeft();
	clearInterval(slideshowInterval);
	intervalSet = false;
	setTimeout(function(){
		if(!intervalSet){
			intervalSet = true;
			slideshowInterval = setInterval(function(){slideshowLeft()}, 5000)
		}
	}, 15000)	
});
