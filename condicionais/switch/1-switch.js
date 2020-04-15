//1-switch.js
/*
switch (expression) {
	case valor1:
		[break;]

	case valorN:
		[break;]

	default:
		[break;]
}
*/

const fruit = 'pera';

switch (fruit) {
	case 'banana':
		console.log('R$ 3,00 / KG')
		break;
	case 'mamão':
	case 'pera':
		console.log('R$ 2,00 / KG')
		break;
	default: 
		console.log('Produto não existe no estoque');
		break;	
}