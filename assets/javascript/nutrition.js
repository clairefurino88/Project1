//array of recipes to be generated as boxes and all searches will push to this array
var recipes = ["grilled chicken", "garden salad", "baked salmon", "farro", "beet salad"];
var favorites = [];
var fav =JSON.parse(localStorage.getItem("favorites"))
if(fav !== null ){
    
for (i=0; i< fav.length; i++){
    favorites.push(fav[i]);
}}
// function to display search results / ajax request
function displayRecipe() {
    //API Key: d685a1e4d3884f01da23f10c9b5c8603 
    var search = $(this).attr("data-name")
    var queryUrl = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=d685a1e4d3884f01da23f10c9b5c8603&q=" + search
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (results) {
        //empties the previous search results
        $("#recipeResults").empty();
        //turns the results into a string
        var response = JSON.parse(results);
        var responses = response.recipes;
        //for loop using i<10 to limit the search results to 10
        for (var i = 0; i < 10; i++) {
            console.log(responses[i])
            //create a new div for all the results to go into
            var recDiv = $("<div class='col-md-3 animated jello' id='recDiv'>");
            //create an image
            var recipeImage = $("<img id='recipePic'><br>")
            //create favorites button
            var favoriteBtn = $("<button class='btn btn-success addFavorite'>Bookmark the Recipe</button>")
            //create a link to the actually recipe
            var recipeButton = $("<a href='' target='_blank' id='recipeWindow'></a>")
            //get the name of the dish
            var title = $("<div class='title'>").text(responses[i].title);
            recipeButton.attr("href", responses[i].source_url);
            recipeImage.attr("src", responses[i].image_url);
            recipeButton.text("View Recipe");
            favoriteBtn.attr("href", responses[i].source_url);
            favoriteBtn.attr("src", responses[i].image_url);
            favoriteBtn.attr("title", responses[i].title);
            recDiv.prepend(title);
            recDiv.prepend(recipeButton);
            recDiv.prepend(recipeImage);
            recDiv.prepend(favoriteBtn);
            $("#recipeResults").prepend(recDiv);
            $("#recipeResults").show();
            $("#favorites").hide();
        }
            $(".addFavorite").on("click", function(event) {
                event.preventDefault();
                console.log(this)
               
                var favorite = {
                    href: $(this).attr("href"), 
                    src: $(this).attr("src"),
                    title:$(this).attr("title")
                }
                favorites.push(favorite);
                console.log(favorites)
                localStorage.setItem("favorites", JSON.stringify(favorites))
                console.log(favorite)
               
            })
        
    })
}
//shows the recipes as boxes to click on
function renderBox() {
    $("#recipeBox").empty();
    for (i = 0; i < recipes.length; i++) {
        var box = $("<button class='btn btn-danger'>")
        box.addClass("food")
        box.attr("data-name", recipes[i]);
        box.text(recipes[i]);
        $("#recipeBox").append(box);
    }
}
function showBookMark() {
   
    $("#favorites").empty();
    $("#recipeResults").hide();
    $("#favorites").show();
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    for(i=0; i < favorites.length; i++){
    var bookmarkDiv = $("<div class='col-md-3 bookmarkDiv animated jello'>");
    var recTitle = $("<div class='title'>");
    var recImg = $("<img  id='recipePic'><br>");
    var recSrc = $("<a href='' target ='_blank' id='recipeWindow'>");
    var b =$("<button class='delete'>").text("x").attr("data-index", i);
    recImg.attr("src", favorites[i].src);
    recTitle.text(favorites[i].title);
    recSrc.attr("href", favorites[i].href);
    recSrc.text("View Recipe");
    bookmarkDiv.append(b);
    bookmarkDiv.prepend(recTitle);
    bookmarkDiv.prepend(recSrc);
    bookmarkDiv.prepend(recImg);
    $("#favorites").prepend(bookmarkDiv);
    }
}
$(".favorite").on("click", function(event){
    event.preventDefault();
   
    $("#favorites").empty();
    $("#recipeResults").hide();
    $("#favorites").show();
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    for(i=0; i < favorites.length; i++){
    var bookmarkDiv = $("<div class='col-md-3 bookmarkDiv animated jello'>");
    var recTitle = $("<div class='title'>");
    var recImg = $("<img  id='recipePic'><br>");
    var recSrc = $("<a href='' target ='_blank' id='recipeWindow'>");
    var b =$("<button class='delete'>").text("x").attr("data-index", i);
    recImg.attr("src", favorites[i].src);
    recTitle.text(favorites[i].title);
    recSrc.attr("href", favorites[i].href);
    recSrc.text("View Recipe");
    bookmarkDiv.append(b);
    bookmarkDiv.prepend(recTitle);
    bookmarkDiv.prepend(recSrc);
    bookmarkDiv.prepend(recImg);
    $("#favorites").prepend(bookmarkDiv);
    }
})
//deletes bookmarked items
$(document).on("click", "button.delete", function() {
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    var currentIndex = $(this).attr("data-index");

    favorites.splice(currentIndex, 1);
    fav = favorites;

    localStorage.setItem("favorites", JSON.stringify(favorites));

    showBookMark();
})
//pushes the search to the recipe array
$("#search").on("click", function (event) {
    event.preventDefault();
    var recipe = $("#newRecipe").val().trim()
    if (recipe === "") {
        return;
    }
    recipes.push(recipe);
    $("#newRecipe").val("")
    renderBox();
})
//displays the results when the box is clicked
$(document).on("click", ".food", displayRecipe);
renderBox();
$("#recipeResults").show();
$("#favorites").hide();
