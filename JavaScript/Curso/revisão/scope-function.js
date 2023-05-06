// VARIAVEL GLOBAL
let n = 'global'

    function mostra(){  
        /* ESTA VARIAVEL SÓ EXISTE DENTRO DA FUNÇÃO MOSTRAR */
        let n1 = "local"
        console.log("valor de n1 dentro da função: " + n1);

        if(true){
            let n2 = "valor de n2 dentro de if com let: "+ n1;
            console.log(n2)
            // let é uma declaração em bloco, diferente de var que é em função
        }
    }

    mostra();
    
    console.log('valor de n no escopo global: ' + n);
    
     /*
     console.log(n1)
     Isso retornara:
     n1: is not defined
     já que o n1 só foi declarado dentro da função
    */

     function fnExt(){
        let n = "n local da função externa"
        
        console.log(n)
            function fnInt(){
                let n = "n local da função interna"
                console.log(n)
            }
            fnInt();
     }

     fnExt();

function square(numero, boomer){
    return numero % boomer
}


n = square(21, 19)

console.log(n)