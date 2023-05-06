(function(){
    const soma = 10 + 20
    if(soma < 10){
        console.log(true)
    }
    else{
        console.log(false)
    }
})();

(function (soma1, soma2){
    let somar = soma1 + soma2

    if(somar >= 4){
    console.log(somar, true)
    }else{
        console.log(somar, false)
    }
})(1,1)