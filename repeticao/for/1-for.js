//1-for.js

/*
for ([expressaoInicial]; [condicao]; [incremento]) {
	//code
}
*/

const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	console.log(`Element #${index}: ${element}`);
}