function displayRecipeButton() {
    var search = $(this).attr(".form-control").val();
    var key = "d685a1e4d3884f01da23f10c9b5c8603";
	var queryURL = "http://food2fork.com/api/search?key=" + key + "&q=" + $(".form-control").val();
	console.log("Searched For: " + $(".form-control").val());
	console.log("queryURL: " + queryURL);
   
    $.ajax({
        url: queryUrl,
        method: "GET"
}).then(function (results) {
    // console.log('resuls: ', results);
    var response = JSON.parse(results);
    var responses = response.recipe;
    // console.log(response);
    console.log(Array.isArray(responses));
    for (var i = 0 ; i < responses.length; i++){
        var recipeImage = $("<img id='recipePic'>")
        console.log(responses[i])
        recipeImage.attr("src", responses[i].image_url);
        $("#recipeResults").prepend(recipeImage);
    }
})
}

function renderBox() {
$("#recipeBox").empty();
for (i = 0; i < recipe.length; i++){
var box = $("<button>")
box.addClass("food")
box.attr("data-name", recipe[i]);
box.text(recipe[i]);
$("#recipeBox").append(box);}
}

$("#search").on("click", function (event) {
event.preventDefault();
var recipe = $("#newRecipe").val();
recipe.push(recipe);
$("#newRecipe").val("")
renderBox();
})
$(document).on("click", ".food", displayRecipeButton);
renderBox();