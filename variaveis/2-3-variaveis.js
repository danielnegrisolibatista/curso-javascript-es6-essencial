//2-3-variaveis.js
(() => {
	const test = 'valor função';
	console.log(`Valor dentro do função "${test}"`);
	if (true) {
		const test = 'valor if';
		console.log(`Valor dentro do if "${test}"`);
	}
	console.log(`Valor após a execução do if "${test}"`);
})();