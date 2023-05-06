 let n1 = 10
 let n2 = 5
                            // OPERADORES ARITIMETICOS
 console.log(n1 + n2);
 console.log(n1 - n2);
 console.log(n1 * n2);
 console.log(n1 / n2);
 console.log(n1 % n2);
 console.log(2 ** 3);
                            // OPERADORES DE ATRIBUIÇÃO
 let n3 = 10;
 n3 = n3 + 2;
 console.log(`N3 vale: ${n3}`);
 n3 += 2;
 console.log(`N3 com atribuição vale: ${n3}`);
                            //  INCREMENTO E DECREMENTO


let i = 0;

// console.log(i++)
console.log(i--) 
console.log(i)
console.log(--i)
console.log(--i)
                            // OPERADORES DE COMPARAÇÃO
       /*
       igualdade de valor: ==
       igualdade de valor e tipo: ===
       menor que: <
       maior que: >
       menor igual: <=
       maior igual: >=
       diferente, valores diferentes: !=
       valores e tipos diferentes !== 
       */
      
    console.log(n1 == "10"); //true
    console.log(n1 === "10"); //false
    console.log(n1 < 4); //false
    console.log(n1 > 4); //true
    console.log(n2 <= 5) //true
    console.log(n2 >= 10) //false
    console.log(n1 != "10"); //false
    console.log(n1 !== "10"); //true

                            // OPERADORES LÓGICOS

    /*
    Para uma pessoa viajar para o exterior precisa ser maior de 18 anos ou acompanhada pelos pais e ter comprado o bilhete
    */

let age = 30;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (age >= 18 || paisPresentes) && comprouBilhete;

    console.log(`Pode viajar ${podeViajar}`) 