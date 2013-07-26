$(document).ready(function() {
	$('.navbar').css("top", "-40px");
	$('.background').fadeIn(1000);
	$('.hero-shoe').show();
	var shoeWidth = $('.hero-shoe img').width();
	$('.hero-shoe').hide().delay(700).fadeTo(1000,1);
	$('.hero-shoe img').css("width", "0").delay(700).animate({width: shoeWidth}, 1000);
	$('.navbar').delay(1000).animate({top: "0"}, 300);
});