function mostrar(){
    let n1 = parseFloat(document.getElementById('number').value);
    let resposta = document.getElementById('resposta');
    let tabuada = '';
    let i = 0;

    for(let i = 0; i <= 10; i++){

            if(i === 5){
                continue
            }
        tabuada += `${n1} x ${i} = ${(n1 * i)} <br>`

        resposta.innerHTML = tabuada;
    }

    do{
        if(i > 10){
            alert('indice maior que 10');
            break;
        }

        tabuada += `${n1} x ${i} = ${(n1 * i)} <br>`
        i++;
        
    }while(i <= 10){
        
    }
}
