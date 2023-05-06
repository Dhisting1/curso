const lucas = {
  name: "Lucas",
  lastName: "Lima",
  age: 23,
};
const maria = {
  name: "Maria",
  lastName: "Lima",
  age: 13,
};
const fernanda = {
  name: "Fernanda",
  lastName: "Lima",
  age: 13,
};
const jose = {
  name: "Jose",
  lastName: "Lima",
  age: 43,
};

const people = [lucas, maria, fernanda, jose];
// map
const nome = people.map((value, index) => {
  console.log("index: ", index);
  console.log("value: ", value);
  console.log("---------------------");

  return `${value.name} ${value.lastName}`;
});

console.log(nome);

//Find

const encontrar = people.find((value, index, array) => {
  const menor = value.age < 18;
  return menor;
});
console.log(encontrar);

// Filter

const idade = people.filter((value, index, array) => {
  const eMaiorIdade = value.age >= 18;
  return eMaiorIdade;
});
console.log("----------------");
console.log("find");
console.log(idade);

// reduce
console.log("------------------------------------------------------------");
console.log("Reduce");
const media = people.reduce((valorAnterior, valorAtual, indexAtual) => {
  console.log("Valor atual", valorAtual);
  const soma = valorAnterior + valorAtual.age;
  return soma;
}, 0);

console.log("idade total: ", media);

console.log("idade media: ", media / people.length);
