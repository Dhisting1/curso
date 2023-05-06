const arra = [1, 4, 5, 2, "oi", true];

let number = arra.some(function (el) {
  //   console.log(el);
  return typeof el === "number" && el > 5;
});
// console.log(number);

arra.filter(function (elemento, indice, arr) {
  return false;
});

console.log(arra);
