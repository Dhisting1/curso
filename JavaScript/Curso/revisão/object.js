const objeto = {
    nome: "Alex de Souza Arruda",
    idade: 55,
    cep: 72880612,
    telefone: 61992755540,
    endereco: "SQ 16 Quadra 13",
    casa: 65
};

    /* Iteração com Objetos */

    console.log(objeto);

    for(let propriedade in objeto){
        // console.log(propriedade);
        console.log(objeto[propriedade]);
    }

    /*Métodos de objetos */

    const produto = {
        nome: "caneta",
        qtd: 10,
        comprar(n){

            console.log(this)
            if(n > this.qtd){
                return "quantidade não disponivel"    
            }
            this.qtd -= n;
        }
    }

    produto.comprar(3);
    console.log(produto);

    produto.comprar(32);
    console.log(produto);