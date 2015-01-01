var mobileMenuWidth = 550;
var mobileLogoWidth = 655;
var fontSize = {'small' : '1.1em', 'large' : '1.3em'};

$(document).ready(function() {
	$('.dropdown-toggle').dropdown();
	sizeWindow();

	if(typeof(resizeMap) === typeof(Function)) {
		resizeMap();
	}
});

$(window).resize(function() {
	sizeWindow();

	if(typeof(resizeMap) === typeof(Function)) {
		resizeMap();
	}
});

function sizeWindow() {
	var mobileMenu = $(window).width() <= mobileMenuWidth;
	var mobileLogo = $(window).width() <= mobileLogoWidth;

	$("#mobile-menu").toggle(mobileMenu);
	$("#desktop-menu").toggle(! mobileMenu);

	$("#mobile-logo").toggle(mobileLogo);
	$("#desktop-logo").toggle(! mobileLogo);

	/* adjust font size */
	if(mobileMenu) {
		console.log(1);
		$(".content").css("font-size", fontSize.small);
	} else {
		console.log(3);
		$(".content").css("font-size", fontSize.large);
	}
}