const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = elements.filter((numberPar) => {
  return numberPar % 2 === 0;
}, 0);

console.log(pares);
