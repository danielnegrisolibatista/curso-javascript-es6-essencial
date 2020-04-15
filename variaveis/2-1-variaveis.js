//2-1-variaveis.js
//var não respeita o contexto de bloco
var test = 'example';
(() => {
	//undefined, pois nesse momento não tem valor
	console.log(`Valor dentro do função "${test}"`);
	if (true) {
		//essa declaração e atribuição sobre para o escopo
		var test = 'example';
		console.log(`Valor dentro do if "${test}"`);
	}
	//por isso nesse lugar o test possui o valor atribuido dentro do bloco
	console.log(`Valor após a execução do if "${test}"`);
})();