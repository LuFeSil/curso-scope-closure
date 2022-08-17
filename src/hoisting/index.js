//#region
// console.log(nameOfDog);
// var nameOfDog = "Elmo";

/**
 * var nameOfDog; --> el hoisting sube la declaración, su valor en este momento es undefined
 * console.log(nameOfDog);
 * nameOfDog='Elmo'
 */
//#endregion

//#region
nameOfDog();
function nameOfDog() {
  console.log(`El mejor perrito es ${elmo}`);
}
var elmo = "Elmito";
//#endregion
