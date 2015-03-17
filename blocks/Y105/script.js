(function(){

	var $mapHolder = $("#map-holder");

	$("#openGoogleMap").click(function(e){
		e.preventDefault();
		$mapHolder.toggleClass("open");
	})

})()