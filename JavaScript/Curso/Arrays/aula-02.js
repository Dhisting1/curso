const numeros = [1, 2, 3, 4, 5];
let soma = 0;

let j = 0;
let arr = numeros.reduce((acumulador, atual, i, number) => {
  console.log("i : ", i);
  console.log("j : ", j++);
  console.log("acumulador : ", acumulador, " --- atual : ", atual);
  return acumulador + atual;
}, "");
console.log(numeros);
console.log(arr);

const nomes = ["Lucas", "João", "Fernando", "Joelma", "Maria", "Maria"];
let nomesPorOrdem = nomes.reduce((nomes, nomeAtual) => {
  let primeiraLetra = nomeAtual[0];
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++;
  } else {
    nomes[primeiraLetra] = 1;
  }
  return nomes;
}, {});

console.log(nomesPorOrdem);

/*
  1º Iteração
    nomes = {nomes vai receber um objeto vazio}
    nomeAtual = "Lucas" -> primeiraLetra = nomeAtual[0] = "L" 
    
    Se tiver a propriedade "L" ele irá somar 1
    Senão ele vai atribuir 1

    return {L: 1}
    // Obs String pode ser tratada como um Array

  2º Iteração
    nomes = {L: 1}
    nomeAtual = "João" -> primeiraLetra = "M"
    return = {L: 1, M: 1}

  3º Iteração
    nomes = {L: 1, M: 1}
    nomeAtual = "Fernando" -> primeiraLetra = "F"
    return = {L: 1, M: 1, F:1}

  4º Iteração
    nomes = {L: 1, M: 1, F: 1}
    nomeAtual = "Joelma" -> primeiraLetra = "J"
    return = {L: 1, M: 1, F: 1, J: 1}
  */
