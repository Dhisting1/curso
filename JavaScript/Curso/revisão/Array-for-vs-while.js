function generateRandomNumber(max){
    return parseInt(Math.random() * max);
}

let list = [];
let i = 0;
    while(list.length <= 20){
        i++;
        let randomNumber = generateRandomNumber(30);

            if(list.indexOf(randomNumber) < 0){
                list.push(randomNumber);
            }else{
                console.log(`${randomNumber} ja existe no array`)
            }
    }
console.log(list);
console.log(`O loop foi executado ${i} vezes`);
