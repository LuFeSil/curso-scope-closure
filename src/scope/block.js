function fruits() {
  if (true) {
    var fruit1 = "Apple"; // La palabra reservada var tiene Function Scope
    let fruit2 = "Kiwi"; // Block Scope
    const fruit3 = "Banana"; // Block Scope
    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
  console.log(fruit2); // Arroja error por el tipo de Scope
  console.log(fruit3); // Arroja error por el tipo de Scope
}

fruits();
