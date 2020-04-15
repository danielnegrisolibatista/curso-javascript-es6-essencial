//hoisting-funcao.js
function fnHoistingFun() {
	//mesmo a chamada da função aparecer primeiro que a função, não ocorre erro, porém como boa prática é melhor declarar a função antes de usar
	log('Hoisting de função');
	function log(value) {
		console.log(value);
	}
}

fnHoistingFun();