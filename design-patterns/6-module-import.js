//6-module-import.js
const {getName, setName} = require('./5-module.js');

console.log(getName());
console.log(setName('Daniel'));
console.log(getName());

