//1-modificadores-de-acesso.js
'user script';

/*
//como function
function Person(initialName) {
	let name = initialName;

	this.getName = function() {
		return name
	}

	this.setName = function(newName) {
		name = newName;
	}
}
*/

//versão 12
class Person {
	#name = '';

	constructor(initialName) {
		this.#name = initialName;
	}

	getName = function() {
		return this.#name
	}

	setName = function(newName) {
		this.#name = newName;
	}
}


const p = new Person('Daniel');

console.log(p)
//Person {getName: f, setName: f}

p.getName();
//daniel

p.name;
//undefined

p.setName('Thiago');
p.getName();
//Thiago