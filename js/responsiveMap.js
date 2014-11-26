function resizeMap() {
	var width = $("#map-container").width();

	$("#map").width(width);

	if(width > 650) {
		$("#map").height(width * 0.75);
	} else {
		$("#map").height(width);
	}
}