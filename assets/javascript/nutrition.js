var config = {
    apiKey: "AIzaSyCKc2yWU3q3TyzqFs2kYp3PQh1KVFaJLSw",
    authDomain: "recipes-b2167.firebaseapp.com",
    databaseURL: "https://recipes-b2167.firebaseio.com",
    projectId: "recipes-b2167",
    storageBucket: "recipes-b2167.appspot.com",
    messagingSenderId: "415836891213"
};
firebase.initializeApp(config);

var database = firebase.database();

var recipes = ["grilled chicken", "garden salad", "tuna wrap"];
function displayRecipe() {
    //API Key: d685a1e4d3884f01da23f10c9b5c8603 
    // d685a1e4d3884f01da23f10c9b5c8603 
    var search = $(this).attr("data-name")
    var queryUrl = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=d685a1e4d3884f01da23f10c9b5c8603&q=" + search
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (results) {
        // console.log('resuls: ', results);
        $("#recipeResults").empty();
        var response = JSON.parse(results);
        var responses = response.recipes;
        // console.log(response);
        console.log(Array.isArray(responses));
        for (var i = 0 ; i < 10; i++){ 
            console.log(responses[i])
            var recDiv = $("<div class='col-md-12' id='recDiv'>");
            var recipeImage = $("<img id='recipePic'><br>")
            var recipeButton = $("<a href='' target='_blank' id='recipeWindow'></a>")
            var title = $("<div class='title'>").text(responses[i].title);
            recipeButton.attr("href", responses[i].source_url);
            recipeImage.attr("src", responses[i].image_url);
            recipeButton.text("View Recipe");
            recDiv.prepend(recipeButton);
            recDiv.prepend(recipeImage);
            recDiv.prepend(title);
            $("#recipeResults").prepend(recDiv);
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
    database.ref().set({
        recipe: recipe
    })
    console.log(recipe)
    recipes.push(recipe);
    $("#newRecipe").val("")
    renderBox();
})
$(document).on("click", ".food", displayRecipe);
renderBox();