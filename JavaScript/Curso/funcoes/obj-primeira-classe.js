function funcaoRetorno(callback){
    console.log("Executa ação de callback")
    console.log(callback)
    typeof callback === "function" && callback()
    // callback()
}
function callback(){
    console.log("função passada por parametro dentro de uma function")
}
funcaoRetorno(callback)

const obj = {
    callback
}
if(obj === undefined){
    console.log("Função passada por um objeto")
}

function fn2(n1){
    return function(n2){
        return n1 * n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)

function fn3(){
    fn3.count++
    return  function _fn3(){
        console.log("Função retornada por parametro - fn3")
    }
}
fn3.count = 0;
const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
const funcao3c = fn3()

funcao3()
console.log(fn3.count)



