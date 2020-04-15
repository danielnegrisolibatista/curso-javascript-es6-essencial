//1-array.js
const users = ['Daniel', 'Pedro', 'Jennifer'];

const gender = {
	MAN: Symbol('M'),
	WOMAN: Symbol('W')
}

const persons = [
	{
		name: 'Daniel',
		age: 35,
		gender: gender.MAN
	},
	{
		name: 'Pedro',
		age: 44,
		gender: gender.MAN
	},
	{
		name: 'Jennifer',
		age: 18,
		gender: gender.WOMAN
	}
];

//retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

//verificar se pe array
console.log('A variável person é um array: ', Array.isArray(persons));

//iterar os itens do array
persons.forEach(person, index, arr => {
	console.log(`Nome: ${person.name} index: ${index}`);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//retornar um novo
const personWithCourse = persons.map(person => {
	person.course = 'Introdução ao Javascript';
	return person;
});

console.log('\nPessoal com a adição do curso: ', personWithCourse);

//transformar um array em outro tipo (primeiro param é o novo item, o segundo param é o item do array)
const totalAge = persons.reduce((age, person) => {
	age += person.age;
	return age;
}, 0);

console.log('\nSoma de idade das pessoas: ', totalAge);

//justando operações
const totalEvenAges = persons
												.filter(person => person.age % 2 === 0)
												.reduce((age, person) => {
													age += person.age;
													return age;
												}, 0);

console.log('\nSoma de idade das pessoas que possuem idade par: ', totalEvenAges);
