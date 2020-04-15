//6-transformar-dados.js
//join
//Junta todos os elementos de um array, separados por um delimitador e retorna uma string
const arr1 = [1, 2, 3, 4, 5];

console.log('-');
//"1-2-3-4-5"


//reduce
//Retorna um novo tipo de dado iterando cada posição de um array
const arr2 = [1, 2, 3, 4, 5]

console.log(arr2.reduce((total, value) => total += value, 0));
//15

const arr3 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

//média simples com reduce
console.log(arr3.reduce((totalGrades, student) => totalGrades += student.grade, 0) / arr3.length);
//5.33

console.log(arr3.reduce((studentsNames, student) => studentsNames += student.name + ' ', ''));
//John Jenny Peter