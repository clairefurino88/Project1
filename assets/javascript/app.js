``//  Initial array of recipe
var recipe = [];

// display animal fucntion re-renders the HTML to display the appropriate content
function displayRecipeButton() {
	var search = $(this).attr(".input-group-btn");
	var queryURL = "https://api.edamam.com/search?q=" + $(".input-group-btn") + "&app_id=$76adaaf5&app_key=$12d6b3510a34662cb1ba0ae12634b577/";
	console.log("Searched For: " + ".input-group-btn");
	console.log("queryURL: " + queryURL);

	//  AJAX Call for the specific button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {

		
		//div to hold all the gifs
		dAll = $("<div>");

		for (var i = 0; i < 10; i++) {

			//div to hold the gif
			dTag = $("<div class='gifs'>");

			//Create div to hold and display the rating
			dRating = $("<div>");
			dRating.append("Rating: " + response.data[i].rating);

			//Create div to hold and display the gif
			dGif = $("<div>");

			var image = $("<img class='gif' data-state='still'>");
			image.attr("src", response.data[i].images.fixed_height_still.url);
			image.attr("data-still", response.data[i].images.fixed_height_still.url);
			image.attr("data-animate", response.data[i].images.fixed_height.url)



			dGif.append(image)

			
			//put the div dTag together
			dTag.append(dRating);
			dTag.append(dGif);
			dAll.append(dTag);

		}


		$("#gifDiv").html(dAll);


	}); // ends AJAX call


} // ends displayAnimalGif function


//Function to render buttons
function renderButtons() {
	//Empties the div
	$("#buttons-view").empty();

	//Loops through the array of recipes
	for (var i = 0; i < recipe.length; i++) {
		var a = $("<button class='animal'>");
		a.attr("data-name", recipe[i]);
		a.text(recipe[i]);
		$("#buttons-view").append(a);
	}


} //end of renderButtons function




//animate on click
$(document).on("click", ".gif", function() {

	var state = $(this).attr("data-state");
	var animateUrl = $(this).attr("data-animate");
	var stillUrl = $(this).attr("data-still");

	if (state === "still") {
		$(this).attr("src", animateUrl);
		$(this).attr("data-state", "animate");
	}

	if (state === "animate") {
		$(this).attr("src", stillUrl);
		$(this).attr("data-state", "still")
	}

}); // ends animate on click



//renders buttons on load
renderButtons();``