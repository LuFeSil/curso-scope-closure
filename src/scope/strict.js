//#region
pi = 3.1415; // Por hoisting JS interpreta que var pi = 3.1416
console.log(pi);
//#endregion

//#region
"use strict"
pi = 3.1415; // El modo estricto no deja que JS haga uso de hoisting, por tanto pi no estará definida
console.log(pi);
//#endregion
