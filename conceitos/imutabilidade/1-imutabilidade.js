//1-imutabilidade.js
const user = {
	name: 'Daniel',
	lastName: 'Negrisoli Batista'
}
//o parâmetro é passado para a função por referência, sendo assim caso ela altere o item o mesmo de onde veio a informação será alterada.
function getUserWithFullName(user) {
	return {
		//spread operator
		...user,
		//literal string
		fullName: `${user.name} ${user.lastName}`
	}
}
const userWithFullName = getUserWithFullName(user);
//o retorno é um novo objeto com as alteraçoes desejadas
console.log(userWithFullName, user);