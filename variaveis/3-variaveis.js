//3-variaveis.js
//Se for uma const do tipo primitivo,
const name = 'Daniel';
//não podemos alterar o valor,
name = 'Daniel';
const user = {
	name: 'Daniel'
};
//mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome'
//não podemos fazer o objeto "apontar" para outro lugar
user = {
	name: 'Guilherme'
};
const persons = ['Daniel', 'Pedro', 'Jennifer'];
//podemos adicionar novos itens
persons.push('João');
//result ['Daniel', 'Pedro', 'Jennifer', 'João']
//podemos remover algum item
persons.shift();
//result ['Pedro', 'Jennifer', 'João']
//podemos alterar diretamente
persons[1] = 'James';
//result ['Pedro', 'James', 'João']
//mas não podemos "apontar" para outro array
persons = []
console.log('\nArray após as alterações: ', persons);