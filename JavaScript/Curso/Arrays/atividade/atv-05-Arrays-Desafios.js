function sum() {
  const numbers = [...arguments];
  console.log(numbers);
  return numbers.reduce((sum, atual) => {
    return sum + atual;
  }, 0);
}

function avarege() {
  return sum(...arguments) / arguments.length;
}

let soma = sum(1, 2, 3);
let media = avarege(1, 2, 3, 4);
console.log(soma);
console.log(media);
