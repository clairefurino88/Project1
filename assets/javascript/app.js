var recipes = ["grilled chicken", "garden salad", "tuna wrap"];
function displayRecipe() {
    //API Key: d685a1e4d3884f01da23f10c9b5c8603 
    // d685a1e4d3884f01da23f10c9b5c8603 
    var search = $(this).attr("data-name")
    var queryUrl = "http://food2fork.com/api/search?key=d685a1e4d3884f01da23f10c9b5c8603&q=" + search
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (results) {
        // console.log('resuls: ', results);
         var response = JSON.parse(results);
        var responses = response.recipes;
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
    for (i = 0; i < recipes.length; i++){
    var box = $("<button>")
    box.addClass("food")
    box.attr("data-name", recipes[i]);
    box.text(recipes[i]);
    $("#recipeBox").append(box);}
}

$("#search").on("click", function (event) {
    event.preventDefault();
    var recipe = $("#newRecipe").val();
    recipes.push(recipe);
    $("#newRecipe").val("")
    renderBox();
})
$(document).on("click", ".food", displayRecipe);
renderBox();

