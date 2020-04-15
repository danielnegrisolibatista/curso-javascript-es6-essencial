//5-ordenar.js
//sort
//Ordena os elementos de um array de acordo com a condição
const arr1 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

console.log(arr1.sort((curret, next) => next.grade - curret.grade));
//[{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}]


//reverse
//Inverte os elementos de um array
const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.reverse());
//[5, 4, 3, 2, 1]