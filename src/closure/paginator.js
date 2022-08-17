//#region
function paginator(_data, _reg) {
  const data = _data;
  let dataIndex = 0;
  let reg = _reg;

  return function paginate() {
    if (dataIndex >= data.lenght) {
      return;
    }

    const paginatedData = [];

    for (let index = 0; index < reg && index < data.length; index++) {
      paginatedData.push(data[dataIndex++]);
    }

    console.log(paginatedData);
  };
}

const data = [
  "negro",
  "azul",
  "marron",
  "gris",
  "verde",
  "naranja",
  "rosa",
  "purpura",
  "rojo",
  "blanco",
  "amarillo",
  "turquesa",
  "verdeOliva",
  "verdeMenta",
  "borgonia",
  "lavanda",
  "magenta",
  "salmon",
  "cian",
  "beige",
  "rosado",
  "verdeOscuro",
  "verdeOliva",
  "lila",
  "amarilloPalido",
  "fucsia",
  "mostaza",
  "ocre",
  "trullo",
  "malva",
  "purpuraOscuro",
  "verdeLima",
  "verdeClaro",
  "ciruela",
  "azulClaro",
  "melocoton",
  "violeta",
  "tan",
  "granate",
];

const reg = 5;

/**
 * data => un arreglo a paginar
 * reg => cantidad de registros mostrados en una página
 */
const showDataPaginated = paginator(data, reg);

showDataPaginated(); // [ 'negro', 'azul', 'marron', 'gris', 'verde' ]
showDataPaginated(); // [ 'naranja', 'rosa', 'purpura', 'rojo', 'blanco' ]
showDataPaginated(); // [ 'amarillo', 'turquesa', 'verdeOliva', 'verdeMenta', 'borgonia' ]
showDataPaginated(); // [ 'lavanda', 'magenta', 'salmon', 'cian', 'beige' ]
//#endregion
