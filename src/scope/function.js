function saludo() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hello ${userName}`);
  }
}

saludo();
console.log(userName); // Esto arroja error porque el Scope de username se limita a la función saludo
