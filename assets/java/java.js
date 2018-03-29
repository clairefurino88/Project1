var recipes = ["grilled chicken", "garden salad", "tuna wrap"];




function displayRecipe() {

    var search = $(this).attr("data-name")
    var queryUrl = "https://api.edamam.com/search?q=" + search + "&app_id=$a45275dd&app_key=$777c9cd474af12d91f3e2fd5a047c35d"
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (results) {
        console.log(results)
    })

}



function renderBox() {

    $("#recipeBox").empty();
    for (i = 0; i < recipes.lenght; i++)
        var box = $("<button>")
    box.addClass("food")
    box.attr("data-name", recipes[i]);
    box.text(recipes[i]);
    $("#recipeBox").append(box);
}


$("#search").on("click", function (event) {
    event.preventDefault();

    var recipe = $("#newRecipe").val();
    recipes.push(recipe);
    $("#newRecipe").val("")
    renderBox();
})



$(document).on("click", ".food", displayRecipe)
renderBox();