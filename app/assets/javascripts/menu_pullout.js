var menuPull = function(brewName) {
	var
	menuRight = document.getElementById( 'cbp-spmenu-s2' );
	// showRight = document.getElementById( 'showRight' ),
	// body = document.body;

	// showRight.onclick = function() {
	// classie.toggle( this, 'active' );
	classie.add( menuRight, 'cbp-spmenu-open' );
	$('.brewery-name').text(brewName);
	$('.description').text("");
	$('.address').text("");
	$('.phone').text("");

	$.ajax({
		data: {brewery_name: brewName},
		type: 'post',
		url: "/breweries/brewery",
		success: function(data){
			addAddress(data);
		}
	});


	// disableOther( 'showRight' );

};

function addAddress(data){
	$('.brewery-name').append("<p class='est'>" + "  est. " + data.established + "</p>");
	$('.brewery-name').append('<img class="logo" src='+ data.logo + '></img>');
	$('.description').append(data.description);
	$('.address').append(data.streetAddress + ", " + data.zipcode);
	$('.phone').append(data.phone)
}
