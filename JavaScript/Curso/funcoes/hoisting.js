teste();

function teste(){
    let hello = "A chamada da função com somente 'function' funcionara a qualquer momento do codigo, basta eu chamalá"
    console.log(hello)
}


const teste1 = function teste1(){
    console.log("A chamada da função com 'const', 'let' ou 'var', só irá funcionar depois da função")
}
teste1();