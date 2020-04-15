//3-iterar.js
const arr1 = [1, 2, 3, 4, 5];

//forEach
//Iteração de cada item dentro de um array
arr1.forEach((value, index) => {
	console.log(`${index}: ${value}`);
});


//map
//Retorna um novo array, de mesmo tamanho, iterando cada item de um array
const arr2 = [1, 2, 3, 4, 5];
const arrMap = arr2.map(value => value * 2);
console.log(arrMap)


//flat
//Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)
const arr3 = [20, 34, [35, 60, [70, 40]]];
//recebe como parametro a profundidade
const arrFlat = arr3.flat(2)

console.log(arrFlat);
//[20, 34, 35, 60, 70, 40]


//flatMap
//Retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr4 = [1, 2, 3, 4, 5];
const arrFlatMap = arr4.flatMap(value => [value * 2]);

console.log(arrFlatMap);
//[2, 4, 6, 8]


//keys
//Retorna um Array Iterator que contém as chaves para cada elemento do array.
const arr5 = [1, 2, 3, 4];
const arrIterator = arr.keys();

arrIterator.next();
//{value: 0, done: false}

arrIterator.next();
//{value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: true}


//Values
//Retorna um Array Iterator que contém os valores para cada elemento do array
const arr6 = [1, 2, 3, 4];
const arrIterator = arr.values();

arrIterator.next();
//{value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: false}

arrIterator.next();
//{value: 4, done: true}


//Entries
//Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array
const arr6 = [1, 2, 3, 4];
const arrIterator = arr.entries();

arrIterator.next();
//{value: [0, 1], done: false}

arrIterator.next();
//{value: [1, 2], done: false}

arrIterator.next();
//{value: [2, 3], done: false}

arrIterator.next();
//{value: [3, 4], done: true}
