var mobileWidth = 550;
var mobileActive;

$(document).ready(function() {
	$('.dropdown-toggle').dropdown();
	sizeWindow();
});

$(window).resize(function() {
	sizeWindow();
});

function sizeWindow() {
	mobileActive = $(window).width() <= 550;

	$("#mobile-menu").toggle(mobileActive);
	$("#desktop-menu").toggle(! mobileActive);

	$("#mobile-logo").toggle(mobileActive);
	$("#desktop-logo").toggle(! mobileActive);
}