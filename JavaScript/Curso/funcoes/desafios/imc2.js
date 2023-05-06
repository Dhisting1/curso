function calcularIMC(peso, altura, callback){
    if(peso === undefined || altura === undefined){
        throw Error("coloque dois parametros: peso e altura")
    }
    if(peso <= 0 || altura <= 0){
        throw Error("Valores somente acima de zero")
    }

    let imc = peso / (altura * altura)

    if(typeof callback === "function"){
        return callback(imc)
    }
    return imc
}
function classificaIMC(imc){
    if(imc < 16.9){
        return("Muito abaixo do peso")
    }
    else if(imc < 18.4){
        return("abaixo do peso")
    }
    else if(imc < 24.9){
        return("Peso normal")
    }
    else if(imc < 29.9){
        return("Acima do peso")
    }
    else if(imc < 34.9){
        return("Obesidade I")
    }
    else if(imc < 40){
        return("Obesidade II")
    }
    else{
        return("Obesidade III")
    }
}
let imc = calcularIMC(82, 1.95)
let imc2 = calcularIMC(82, 1.95, classificaIMC)
console.log(imc)
console.log(imc2)