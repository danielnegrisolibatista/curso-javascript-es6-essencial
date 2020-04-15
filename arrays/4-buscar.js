//4-buscar.js
//find
//Retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstGreatThanTwo = arr.find(value => value > 2);

console.log(firstGreatThanTwo);
//3


//findIndex
//Retorna o índice do primeiro item de um array que satisfaz a condição
const arr2 = [1, 2, 3, 4];
const firstGreatThanTwo2 = arr2.findIndex(value => value > 2);

console.log(firstGreatThanTwo2);
//2


//filter
//Retorna um novo arrau com todos os elementos que satisfazem a condição
const arr3 = [1, 2, 3, 4];
const allValuesGreatThanTwo = arr3.findIndex(value => value > 2);

console.log(allValuesGreatThanTwo);
//[3, 4]


//indexOf
//Retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr4 = [1, 2, 3, 4];
const firstIndexOfItem = arr4.indexOf(3);

console.log(firstIndexOfItem);
//1


//lastIndexOf
//Retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr4 = [1, 2, 3, 4];
const lastIndexOfItem = arr4.lastIndexOf(3);

console.log(lastIndexOfItem);
//4


//includes
//Retorna um booleano verificando se determinado elemento existe no array
const arr5 = [1, 3, 3, 4, 3];

const hasItemOne = arr5.includes(1);
//true

const hasItemTwo = arr5.includes(2);
//false


//some
//Retorna um bolleano verificando se pelo menos um item do array satisfaz a condição.
const arr6 = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr6.some(value => value % 2 === 0);
//true


//every
//Retorna um bolleano verificando se todos os itens de um array satisfazem a condição
const arr7 = [1, 3, 3, 4, 3];

const allEvenNumbers = arr7.some(value => value % 2 === 0);
//false




