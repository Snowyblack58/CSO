specialNav = false;
$(document).ready(function(){
	specialNavHandler()
});
$(document).scroll(specialNavHandler);

function specialNavHandler(){
	if(scrollY > 450){
		if(specialNav){
			$('nav').css('background-image','none').css('background','#212121').css('box-shadow','0 2px 8px')
		}
		specialNav = false;
	} else {
		if(!specialNav){
			$('nav').css('background','none').css('box-shadow','none').css('background-image','linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5) 61.8%, rgba(0,0,0,0))')
		}
		specialNav = true;
	}
}