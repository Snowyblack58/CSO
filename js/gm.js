$(document).ready(function(){
	$(".gm-input-group input").trigger("focusin");
	$(".gm-input-group input").trigger("focusout");
});

$(".gm-input-group input").hover(function(){
	if(!$(this).get(0).checkValidity() && !$(this).is(":focus")){
		$(this).parent().css("opacity","0.54");
	}
}, function(){
	if(!$(this).get(0).checkValidity() && !$(this).is(":focus")){
		$(this).parent().css("opacity","0.38");
	}
});
$(".gm-input-group input").focusin(function(){
	$(this).parent().css("opacity","0.87");
});
$(".gm-input-group input").focusout(function(){
	if(!$(this).get(0).checkValidity()){
		$(this).parent().css("opacity","0.38");
	}
});