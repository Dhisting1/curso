                    // DECLARAÇÃO DE FUNÇÃO
function ola(){
	    
}
console.log(ola())
                    // EXPRESSÃO DE FUNÇÃO
const ola2 = function(){
    console.log('ola mundo de function expression');
}
ola2();

                    // ARROW FUNCTIONS

const ola3 = () => {
    console.log('ola mundo de arrow function');

}
ola3();

const diaSemaana = () => {
    return new Date().getDay();
}
console.log(diaSemaana());
 