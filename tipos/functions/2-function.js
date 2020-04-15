//2-function.js
(() => {
	this.name = 'Nome no contexto de criação';

	const getNameArrowFn = () => this.name;
	
	function getName() {
		return this.name;
	}
	
	const user = {
		name: 'Nome no objeto de execução',
		getNameArrowFn,
		getName
	}
	
	console.log(user.getNameArrowFn());
	console.log(user.getName());
	
})();

