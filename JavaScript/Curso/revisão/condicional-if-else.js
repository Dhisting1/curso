let age = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (age >= 18 || paisPresentes) && comprouBilhete;

                                        // OPERADOR TERNARIO

let msgMaiorIdade = (age >= 18) ? "Maior de Idade" : "Menor de Idade";

    console.log(msgMaiorIdade);

// IF AND ELSE 

    /*
        Esse código é o msm do de cima porém usando o operador ternario <3 
    */

//     if(!comprouBilhete){
//         console.log(`Não comprou bilhete`);
        
//     }else{
        
//         if(age >= 18){
//             console.log(`E maior de idade`);
//         }else{
//             console.log(`E menor de idade`);
//         }
//     }
// console.log(`Pode viajar ${podeViajar}`);

    let n1 = 1;
    let n2 = 1;
    let n3 = 0;
    let media = (n1 + n2 + n3) / 3;
        if(n1 === 0 || n2 === 0 || n3 === 0){
            console.log(`Foi reprovado! Sua média foi de: ${media}`);
        } else if(media < 7){
            console.log(`Recuperação, ira fazer prova final sua media foi de ${media}`);
        }else{
            console.log(`Aprovado!! Sua média foi de ${media}`)
        }
    
    console.log(`Saiu do bloco if`);