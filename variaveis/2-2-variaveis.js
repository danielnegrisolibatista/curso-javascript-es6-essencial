//2-2-variaveis.js
(() => {
	//let respeita o contexto de bloco
	let test = 'valor função';
	console.log(`Valor dentro do função "${test}"`);
	if (true) {
		//aqui o test não é o mesmo que o anterior, pois ele respeita o contexto de bloco, sendo assim o anterior não tem o valor alterado por esse atribuição
		let test = 'valor if';
		console.log(`Valor dentro do if "${test}"`);
	}
	console.log(`Valor após a execução do if "${test}"`);
})();