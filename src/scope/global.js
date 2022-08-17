// Variables
//#region 
var a; // Declarar
a = "a"; // Asignar
var b = "b"; // Declarar y asignar
b = "bb"; //Re asignar
var a = "aa"; // Re declarar y asignar
//#endregion

//#region
var fruit = "Apple";
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();
//#endregion

//#region 
function countries() {
  country = "Colombia"; // Global Scope
  console.log(country);
}

countries();
console.log(country);
//#endregion
