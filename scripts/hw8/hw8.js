function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
    xhttp.onload = function () {
        myFunction(this);
    }
}
function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table = "<tr><th>Artist</th><th>Title</th><th>Year</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

// Spoonacular API-Search Recipes by Ingredients
let recipes = document.getElementById('recipes');
document.getElementById('search').addEventListener('click', function () {
    let ingredients = document.getElementById('ingredients').value;
    if (ingredients === "") {
        recipes.innerText = 'Please enter a ingredient!';
    } else {
        recipes.innerText = "";
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}`, {
            headers: { 'X-Api-Key': 'bcd0506addfc404b94dc033ff3b81c4c' }
        })
            .then(response => response.json()) // Parsing the response to JSON format
            .then(data => {
                show(data);

            })
            .catch(error => {
                console.error('Error:', error);
                recipes.innerText = 'Failed to get the recipes.';
            });
    }

});

function show(data) {
    let p = document.createElement("p");
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let p = document.createElement("p");
        p.innerText = (i + 1) + "." + data[i].title;
        let img = document.createElement("img");
        img.src=data[i].image;

        let ingredients = document.createElement("p");
        // for(let j = 0; j < data[j].usedIngredients.length; j++){
        //     console.log(data[j].usedIngredients[j].amount);
        //     console.log(data[j].usedIngredients[j].name);
        // }
        

        recipes.appendChild(p);
        recipes.appendChild(img);
        // recipes.appendChild(ingredients);
    }

}
