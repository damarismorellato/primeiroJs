const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 21;
const estaAcompanhado = false;

if (idadeComprador >= 18 || estaAcompanhado ) {
    console.log("Compra aprovada");

  listaDestinos.splice(0, 1);
} else {
  console.log("Compra não aprovada");
}


console.log(listaDestinos);
