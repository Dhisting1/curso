function alteraPrimitivo(p){
    p += " add";
    console.log("dentro da function", p);
}

let msg = "mensagem";
console.log(msg);
alteraPrimitivo(msg);
console.log(msg);


function alteraArray(a){
    a.push(" adicionado");
}
let arr = ["a"];
console.log(arr);
alteraArray(arr);
console.log(arr);
