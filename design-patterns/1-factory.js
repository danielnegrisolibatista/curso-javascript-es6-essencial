//1-factory.js
//Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são considerasd funções *Factory*.

function Pessoa(customProperties) {
	return {
		name: 'Daniel',
		lastName: 'Negrisoli Batista',
		...customProperties
	}
}

// Factory
const pessoa = Pessoa({name: 'Custom Name', age: 35});
console.log(pessoa);