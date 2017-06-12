
$('document').ready(function(){


$('form').submit(updateCity);
//takes city entered by user
function updateCity(event) {
	//sets user search to city-sets all entries to uppercase to account for mix of upper and lowercase
	var city = $('#city-type').val().toUpperCase().trim();
	//prevents page from relaoding from search
	event.preventDefault();

	//if/else search options for 6 cities-various input options for each
	if (city === 'NEW YORK' || city === 'NEW YORK CITY' || city === 'NYC' || city === 'NY') {
		$('body').css({'background-image': 'url(  ./images/nyc.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	} else if (city === 'SAN FRANCISCO' || city === 'SF' || city === 'BAY AREA' || city === 'SAN FRAN') {
		$('body').css({'background-image': 'url(  ./images/sf.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	} else if (city === 'LOS ANGELES' || city === 'LA' || city === 'LAX') {
		$('body').css({'background-image': 'url(  ./images/la.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	} else if (city === 'AUSTIN' || city === 'ATX') {
		$('body').css({'background-image': 'url(  ./images/austin.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	} else if (city === 'SYDNEY' || city === 'SYD') {
		$('body').css({'background-image': 'url(  ./images/sydney.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	} //Detroit added for fun and hometown

	else if (city === 'DETROIT' || city === 'DET' || city === 'MOTOWN' || city === 'DTW') {
		$('body').css({'background-image': 'url(  ./images/detroit.jpg)', 'background-repeat': 'no-repeat'});
		//displays user entered city
		$('p').html(city);
		//changes display of title to match user entered city
		$('title').html('CitiPix: '+ city);
	}	else {
		//pop up alerts user to that search did work because of spelling or City not being loaded yet and returns to and reloads original citipix background
		alert('Check Spelling and/or City has not been loaded yet');
		$('body').css({'background-image': 'url(  ./images/citipix_skyline.jpg)','background-repeat': 'no-repeat' });

	}
//resets the search bar	
$('#city-type').val('');

}


})