//2-inserir-remover-elementos-arrays.js
//push
//Adiciona um ou mais elementos no final do array e retorna o tamanaho do novo array
const arr1 = ['banana', 'melancia', 'abacate'];
const arr1Length = arr1.push('acerola');

console.log(arr1Length)
//4

console.log(arr1)
//['banana', 'melancia', 'abacate', 'acerola']



//pop
//Remove o último elemento de um array e retorna o elemento removido
const arr2 = ['banana', 'melancia', 'abacate'];
const removedItemArr2 = arr2.pop();

console.log(removedItemArr2);
//abacate

console.log(arr2)
//['banana', 'melancia'];



//unshift
//Adiciona um ou mais elementos no início do array e retorna o tamanho do novo array
const arr3 = ['banana', 'melancia', 'abacate'];
const arr3Length = arr2.unshift('acerola');

console.log(arr1Length)
//4

console.log(arr1)
//['acerola', 'banana', 'melancia', 'abacate']


//shift
//Remove o primeiro elemento de um array e retorna o elemento removido
const arr4 = ['banana', 'melancia', 'abacate'];
const removedItemArr4 = arr4.pop();

console.log(removedItemArr4);
//banana

console.log(arr4)
//['melancia', 'abacate'];


//concat
//Concatena um ou mais arrays retornando um novo array
const arr5 = ['banana', 'melancia', 'abacate'];
const arr6 = ['coxinha', 'kibe', 'empada'];
const arr7 = arr5.concat(arr6);

console.log(arr7)
//['banana', 'melancia', 'abacate', 'coxinha', 'kibe', 'empada']


//slice
//Retorna um novo array "fatiando" o array de acordo com o início e fim
const arr8 = ['banana', 'melancia', 'abacate', 'acerola', 'laranja'];

//retorna de-até
console.log(arr8.slice(0, 2));
//['banana', 'melancia']

//retorna a partir de 
console.log(arr8.slice(2));
//['abacate', 'acerola', 'laranja']

//realiza o mesmo procedimento do a partir de porém ao contrário
console.log(arr8.slice(-1));
//['laranja']

//realiza o mesmo procedimento do a partir de porém ao contrário
console.log(arr8.slice(-3));
//['abacate', 'acerola', 'laranja']


//splice
//Altera um array adicionando novos elementos enquanto remove elementos antigos
const arr9 = [1, 2, 3, 4, 5];

//remove os elementos do array original a partir de 
arr9.splice(2);
//[3, 4, 5]

console.log(arr9);
//[1, 2]

//é possível remover e adicionar ao mesmo tempo
//nesse exemplo, na posição 0, remove 0 elementos, adiciona o item 'first'
arr9.splice(0, 0, 'first');
//retorno é sempre os elementos removidos
//[]

console.log(arr9);
//["first", 1, 2]