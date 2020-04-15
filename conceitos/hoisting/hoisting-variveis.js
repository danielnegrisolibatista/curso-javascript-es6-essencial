//hoisting-variveis.js
function fnHoistingVar() {
	//Exemplo de variável que não foi ainda 'declarada', devido ao hoisting a váriavel é considerada indefinida ao invés de não declarada (reference error)
	//nesse console é escrito undefined
	console.log(text);
	var text = 'Exemplo';
	//aqui já é retornando string
	console.log(text);
}

fnHoistingVar();