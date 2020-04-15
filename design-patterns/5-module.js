//5-module.js
let name = 'default';

function getName() {
  return name;
}

function setName(newName) {
	name = newName;
}

module.exports = {
	getName,
	setName
};


