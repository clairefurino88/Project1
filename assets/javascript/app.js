$(document).ready(function(){
    //AJAX allows us to make HTTP requests for yummy data
    //Edamam API
    $.ajax('https://api.edamam.com/search?q=chicken',{
        success: function(results){
            //results was a giant object
            //recipes is results.hits which is an array of recipes
            var recipes = results.hits;
            //for loop to iterate through recipes array
            for(var i = 0; i < recipes.length; i++){
                //recipes[i] (each recipe) is an object
                var recipe = recipes[i].recipe;
                //using dot notation, pull out the data that you want to display
                var title = recipe.label;
                var image_url = recipe.image;
                //ingredients is an array
                var ingredients = recipe.ingredients;
                //created a ul tag to hold the list items that are the ingredients
                var ingredientList = $('<ul>');
                /* Making a ul with li that are ingredients */
                //iterated through the ingredients array
                for(var j = 0; j < ingredients.length; j++){
                    //each ingredient is an object; ingredient.text is the stuff we want
                    var ingredient = ingredients[j].text;
                    //created a list item to hold the ingredient text
                    var li = $('<li>').html(ingredient);
                    //appended each list item to the ingredientList
                    ingredientList.append(li);
                }
                //making HTML elements containing the information that we've pulled
                var recipe_title = $('<h3>').html(title);
                var recipe_image = $('<img>').attr('src', image_url);
                var label = $('<h4>').html('Ingredients');
                //appending those elements to our container div with id of recipes
                $("#recipes").append(recipe_title, recipe_image, label, ingredientList);

            }
        }
    })
})