//1-classes.js
'use strict';

class Animal {
	constructor(quatidadePatas) {
		this.quatidadePatas = quatidadePatas
	}
}

class Cachorro extends Animal {
	constructor(morde) {
		super(4);
		this.morde = 4;
	}
}

const pug = new Cachorro(false);
console.log(pug);
//Cachorro {quatidadePatas: 4, morde: false}

