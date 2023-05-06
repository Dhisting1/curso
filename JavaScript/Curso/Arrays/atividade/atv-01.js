const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // Variavél soma vai ser atribuida a um novo valor que no caso será numeros[i] + soma
}

const media = soma / numeros.length;

console.log(media);
