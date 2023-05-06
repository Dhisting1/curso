 function valores(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
 }

 console.log(valores(1,4,52,21,-1,-30, -20))

const somar = function (){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(somar(1,4,52,21))

const soma = () => {
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(soma(1,2,4))