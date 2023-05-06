function sum() {
  const numeros = [...arguments];
  console.log(numeros);

  return numeros.reduce((sum, atual) => {
    return sum + atual;
  }, 0);
}

function avarege() {
  return sum(...arguments) / arguments.length;
}
let media = avarege(1, 2, 3, 4, 5);
console.log(media);
