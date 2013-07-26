$('#hero-shoe-img').load(function() {
	$('.navbar').css("top", "-40px");
	$('.background').fadeIn(1000);
	$('.hero-shoe').show();
	var shoeWidth = $('.hero-shoe img').width();
	$('.hero-shoe').hide().delay(700).fadeTo(1000,1);
	$('.hero-shoe img').css("width", "0").delay(700).animate({width: shoeWidth}, 1000, function() {
		attachMouse();
	});
	$('.navbar').delay(1000).animate({top: "0"}, 300);
});

attachMouse = function() {
	$(document).mousemove(function(event) {
		var mouseX = event.pageX;
		var mouseY = event.pageY;
		var $window = $(window);
		var centerX = $window.width()/2;
		var centerY = $window.height()/2;
		var shoeScalingFactor = 0.05;
		var backgroundScalingFactor = -0.025;
		var hazeScalingFactor = 3.2 * backgroundScalingFactor;
		var shoeOffsetX = (mouseX-centerX) * shoeScalingFactor;
		var shoeOffsetY = (mouseY-centerY) * shoeScalingFactor;
		var backgroundOffsetX = (mouseX-centerX) * backgroundScalingFactor;
		var backgroundOffsetY = (mouseY-centerY) * backgroundScalingFactor;
		var hazeOffsetX = (mouseX-centerX) * hazeScalingFactor;
		var hazeOffsetY = (mouseY-centerY) * hazeScalingFactor;
		$('.shoe-image-container img').css({"left" : shoeOffsetX + "px", "top": shoeOffsetY + "px"});
		$('.background img').css({"left" : backgroundOffsetX + "px", "top": backgroundOffsetY + "px"});
		$('.haze img').css({"left" : hazeOffsetX + "px", "top": hazeOffsetY + "px"})
	});
}