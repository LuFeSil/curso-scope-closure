var firstName; // Valor por defecto --> undefined
firstName = "Oscar";
console.log(firstName);

var lastName = "David"; // Declarar / Asignar
lastName = "Ana"; // Re asignar
console.log(lastName);

var secondName = "David"; // Declarar / Asignar
var secondName = "Ana"; // Re declarar / Asignar
console.log(secondName);

// Let
let fruit = "Apple"; // Declarar y asignar
fruit = "Kiwi"; // Re asignar
console.log(fruit);

// let fruit = "Banana"; // Marca error porque la palabra reservada let no permite re declarar
// console.log(fruit);

// const

//#region
const animal = "Dog"; // Declarar y asignar
// animal = "Cat"; // La palabra reservada const no permite re asignar
// const animal = "Snake"; // La palabra reservada const no permite re declarar
console.log(animal);
//#endregion

//#region
const vehicles = [];
vehicles.push("Mazda CX-30");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
//#endregion
