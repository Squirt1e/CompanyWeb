$(document).ready(function() {
	$("#view-box>.timeline-block").mouseenter(function(){
		$(this).find(".inner-circle").css("background-color", "#64b7f7");
		$(this).find(".timeline-content").css({
			"background-color": "#64b7f7",
			"color": "#ffffff"
		});
	});
});