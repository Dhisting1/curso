const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
let numerosUnicos = numeros.filter((numero, indice) => {
  return numeros.indexOf(numero) === indice;
});
console.log(numerosUnicos);

const numerosUni = numeros.reduce((numerosUni, numeroAtual) => {
  if (numerosUni.indexOf(numeroAtual) < 0) {
    numerosUni.push(numeroAtual);
  }
  return numerosUni;
}, []);
console.log(numerosUni);
