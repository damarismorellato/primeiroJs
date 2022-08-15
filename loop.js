const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 21;
const estaAcompanhado = true;
let temPassagem = true;
const destino = "Rio de Janeiro";

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

let contador = 0 ;

while(contador <3) {
  console.log(listaDestinos[contador]);
  contador += 1;
} 
