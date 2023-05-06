const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const obj = {
  nome: "Lucas",
  sobreNome: "Fernando",
  apelido: "Nando",
  idade: 23,
  email: "lcs@server.com",
};

for (let abacaxi in obj) {
  console.log(abacaxi);
  console.log(obj[abacaxi]);
}

// for (let numero of arr) {
//   for (let numero2 of arr2) {
//     console.log(`${numero} * ${numero2} = ${numero * numero2}`);
//   }
// }
