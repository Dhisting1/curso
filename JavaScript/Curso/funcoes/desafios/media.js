(function(){
    function media(){
        let total = 0;
        let quantidade = arguments.length;
        for(let i = 0; i < quantidade; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("apenas numeros");
            }

            total += arguments[i];
        }

        return (total / quantidade) || 0;
    }

    let mediatotal = media();

    console.log(mediatotal)
})()