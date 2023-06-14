let ingredients = ["pâtes", "oeuf", "sel", "poivre", "lardon", "oignon", "parmesan"]
let nombreIngredients = ingredients.length
console.log(nombreIngredients)
document.body.innerHTML += "<h2> Vous avez besoin de " + nombreIngredients + " ingredients pour la recette </h2>"

let str = ""

for (i=0; i<ingredients.length; i++)
{
    str += ingredients[i] + "  "
}

document.body.innerHTML += "<h3> Les ingredients nécessaires sont : " + str + " </h3>"

//3

for (i=0; i<ingredients.length; i++)
{
    document.write("<br/>" + (i+1) + ": " + ingredients[i])
}
document.write("<br/>")
//4
let ingredientsTrie = ingredients.sort()
for (i=0; i<ingredients.length; i++)
{
    document.write("<br/>" + (i+1) + ": " + ingredientsTrie[i])
}



