/* Initial array of teams
var recipe = []
// display animal fucntion re-renders the HTML to display the appropriate content
function displayRecipeThumbnail() {
    var recipe = $(this).attr("data-name");
    var queryURL = "https://api.edamam.com/search?q=" + $(".form-control") + "&limit=10&api_key=12d6b3510a34662cb1ba0ae12634b577 ";
    console.log("Team: " + animal);
    console.log("queryURL: " + queryURL);

    //  AJAX Call for the specific button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

   })*/