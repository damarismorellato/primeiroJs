const listaDestinos = new Array( //criando um array
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
listaDestinos.push(`João Pessoa`) //adicionando elementos no array de forma dinamica

listaDestinos.splice(0,1) //retira o elemennto da lista, primeiro parametro é o indice do elemento
//e o segundo parametro é a quantidade de elementos que serão deletados.
console.log(listaDestinos);
console.log(listaDestinos[2]);