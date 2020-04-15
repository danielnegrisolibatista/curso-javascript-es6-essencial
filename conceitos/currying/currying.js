//currying.js
//função natural
function somaFn(a, b) {
	return a + b;
}
//aplicação do currying
function somaCurrying(a) {
	return function(b) {
		return a + b;
	}
}
//chamada função natural
console.log(somaFn(1, 1));
//chamada função currying
const resultSoma = somaCurrying(1);
console.log(resultSoma(1));