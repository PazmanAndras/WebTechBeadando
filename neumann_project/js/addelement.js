
// Gomb kiválasztása az azonosítója alapján
var createNewElementButton = document.getElementById("createNewElement");


// div elem kiválasztása az azonosítója alapján
var existingElement = document.getElementById("existingElement");


// Gomb eseménykezelő hozzáadása
createNewElementButton.addEventListener("click", function() {
    
    var newDiv = document.createElement("div");

    newDiv.innerHTML = "📂New element"; //tartalom beállítás

    
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    newDiv.style.marginLeft = "30%";
    newDiv.style.width="30%";
    newDiv.style.backgroundColor = "red";

   
    document.body.appendChild(newDiv);
});


var modifyElementButton = document.getElementById("modifyElement");

var myDiv = document.getElementById("myDiv");

// Gomb eseménykezelő hozzáadása
modifyElementButton.addEventListener("click", function() {
    // Meglévő div elem tartalmának módosítása
    myDiv.style.color = "red"; // Beállítjuk a színét pirosra
    myDiv.innerHTML = "This changed!🎃"; // Módosítjuk a tartalmát
});