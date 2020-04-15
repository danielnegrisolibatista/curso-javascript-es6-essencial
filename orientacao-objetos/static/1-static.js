//1-static.js
'use strict';

/*
//function
function Person() {}

Person.walk = function() {
	console.log('walking...');
}

console.log(Person.walk());
//walking...
*/

class Person {
	static walk() {
		console.log('walking..');
	}
}

console.log(Person.walk());
//walking...

