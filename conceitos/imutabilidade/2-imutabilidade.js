//2-imutabilidade.js
//lista de alunos com nome e notas
const students = [
	{
		name: 'Grace',
		grade: 7
	},
	{
		name: 'Jennifer',
		grade: 4
	},
	{
		name: 'Paul',
		grade: 10
	},
];
//retorno de alunos aprovados com nota superior ou igual a 7
function getApprovedStudents(studentsList) {
	return studentsList.filter(student => student.grade >= 7);
}
console.log('Alunos aprovados');
//retorna uma nova lista com os alunsos aprovados
console.log(getApprovedStudents(students));
//retorna a lista completa de alunos
console.log('\nLista de alunos');
console.log(students);