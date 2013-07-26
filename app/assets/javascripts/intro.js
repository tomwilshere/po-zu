$(document).ready(function() {
	$('.navbar').css("top", "-40px");
	$('.background').fadeIn(1000);
	$('.hero-shoe').delay(700).fadeTo(1000,1);
	$('.navbar').delay(1000).animate({top: "0"}, 300);
});