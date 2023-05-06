const pessoas = [{
    nome: "Rodrigo",
    idade: 20,
    cep: 72880612,
    endereco: "SQ 16 Quadra 13",
    casa: 65
},
{
    nome: "Kelly",
    idade: 20,
    cep: 72880632,
    endereco: "SQ 12 Quadra 13",
    casa: 615
},

{
    nome: "Lucas",
    idade: 30,
    cep: 72880682,
    endereco: "SQ 16 Quadra 1",
    casa: 5
}]

    for(let i = 0; i < pessoas.length; i++){
       console.log(`Nome: ${pessoas[i].nome}`);
       console.log(`Idade: ${pessoas[i].idade} anos`);
    }