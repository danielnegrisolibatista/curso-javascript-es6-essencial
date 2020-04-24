
# Curso JavaScript ES6 essencial

JavaScript ES6 essencial

# Módulo I - Introdução ao ES6

- Autor: Guilherme Cabrini da Silva
- Origem: Digital Innovation One

## Aula I - História e conceitos

### História

- Javascript foi lançado em setembro de 1995
- Foi lançado junto com a versão beta do Netscape 2.0
- Criado por Brendan Eich
- O JavaScript teve dois nomes anteriores: Mocha e Livescript
- ECMAScript é uma especificação de linguagem script criada pela Ecma International, utilizada por linguagens como: ActionScript, JScript e Javascript.
- O comitê [TC39](https://github.com/tc39) é quem avalia as [propostas de melhorias](https://github.com/tc39/proposals)

### Conceitos

- Linguagem interpretada
- O JavaScript possui tipagem fraca e dinâmica pois
  - 1 - O tipo da variável no JavaScript é definido no momento de sua atribuição, esse processo se chama inferência de tipo.
  - 2 - Não é lançado um erro ou uma Exception durante a execução de:  1 + "texto".
  - 3 - Para mudarmos o tipo de uma variável já existente, basta setar um valor de outro tipo:
  - 4 - Não é necessário explicitar o tipo na criação de uma variável no JavaScript.
- [Typescript](https://www.typescriptlang.org) é superset da linguagem Javascript
- [Flow](https://flow.org) é um validador da linguagem.
- Funções de primeira classe e ordem maior significa que são funções que pode ser atribuídas a uma variável, pode ser atribuída a uma estrutura de dados, e pode ser passada por argumentos, e até retornada por outras funções.

```javascript
//funcoes.js
function getName() {
  return 'Daniel Negrisoli Batista';
}
function logFn(fn) {
  console.log(fn());
}

//atribuição a uma variável
const logFnResult = logFn;

//atribuição a uma estrutura de dados
const obj = {
  logFn: logFn
}

//função passada por argumentos
logFnResult(getName);
```

- Closure ou escopo léxico é a capacidade da função "lembrar" do seu contexto de criação.
- Escopo em javascript podem ser de 3 maneiras: global, bloco e função

```javascript
//escopo.js
//escopo global: arquivo todo

{
  //escopo de bloco, dentro dos branchs
}

function fn() {
  //escopo de função
}
```

## Aula II - Currying, Hoisting, Imutabilidade, Tipos e Variáveis

### Currying

É a técnica de transforma uma função com vários parâmetros em apenas um sendo que para cada parâmetro e retornando outra função.

```javascript
//currying.js
//função natural
function somaFn(a, b) {
  return a + b;
}

//aplicação do currying
function somaCurrying(a) {
  return function(b) {
    return a + b;
  }
}

//chamada função natural
console.log(somaFn(1, 1));

//chamada função currying
const resultSoma = somaCurrying(1);
console.log(resultSoma(1));
```

### Hoisting

Hoisting ou içamento é a capacidade do JavaScript elevar a criação de variáveis e funções ao topo do escopo de suas criações. Existem dois tipos de Hoisting: hoisting de variável e hoisting de função.
No *Hoisting de variável* é elevado a sua criação e não a sua atribução, já no *Hoisting de função* ela é elevado como um todo.

#### Hoisting de variável

```javascript
//hoisting-variveis.js
function fnHoistingVar) {
  //Exemplo de variável que não foi ainda 'declarada', devido ao hoisting a váriavel é considerada indefinida ao invés de não declarada (reference error)
  //nesse console é escrito undefined
  console.log(text);

  var text = 'Exemplo';
  //aqui já é retornando string
  console.log(text);
}

fnHoistingVar();
```

#### Hoisting de função

```javascript
//hoisting-funcao.js
function fnHoistingFun()) {
  //mesmo a chamada da função aparecer primeiro que a função, não ocorre erro, porém como boa prática é melhor declarar a função antes de usar
  log('Hoisting de função');

  function log(value) {
    console.log(value);
  }
}

fnHoistingFun();
```

### Imutabilidade

O valor da variável nunca muda, caso precise alterar é preciso criar outra.
Exemplo:
Se precisar inserir um array, você realizar uma cópia inclui o novo item na cópia.
Se precisar atualar um objeto, você realizar uma cópia altera o novo item na cópia.

```javascript
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
```

```javascript
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
```

### Tipos e variáveis

No momento da criação de variáveis e necessário lembrar dos 3 tipos de escopo do javascript: global, bloco e função.

- var
- let
- const

#### Variáveis

```javascript
//1-variaveis.js
var nameVar = 'Daniel';
let nameLet = 'Daniel';
const nameConst = 'Daniel';

console.log(`nameVar : ${nameVar}`);
console.log(`nameLet : ${nameLet}`);
console.log(`nameConst : ${nameConst}`);
```

##### Var

```javascript
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
```

##### Let

```javascript
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
```

##### Const

```javascript
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
```

```javascript
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
```

# Módulo II - Tipos, variáveis, operadores, condicionais e repetição em Javascript ES6

- Autor: Guilherme Cabrini da Silva
- Origem: Digital Innovation One

## Aula I - Tipos e variáveis

### Tipos

- string
- number
- boolean
- null
- undefined
- symbol
- Object
- Function
- Array

```javascript
//1-string.js
//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`)

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

//retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

//retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPosition = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são : ', twoCharsBeforeFirstPosition);
```

```javascript
//1-number.js
const myNumber = 12.4032;

//transformar número para string
const numberAsString = myNumber.toString();
console.log('Número trasnformado em string: ', numberAsString, typeof numberAsString);

//retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casa decimais: ', fixedTwoDecimals);

//transforma uma string em float
console.log('\nString convertida para float: ', parseFloat('13.22'));

//transforma uma string em int
console.log('\nString convertida para int: ', parseInt('13.20'));
```

```javascript
//1-boolean.js
const isActive = true;

console.log('Tipo de variável :', typeof isActive)
```

```javascript
//1-null.js
const nullVariable = null;

console.log('nullVariable :', typeof nullVariable)
```

```javascript
//1-undefined.js
const undefinedVariable = true;

console.log('Tipo de variável :', typeof undefinedVariable)
```

```javascript
//1-symbol.js

const symbol1 = Symbol();
const symbol2 = Symbol();

//symbols são únicos
console.log('symbols1 é igual a symbols2: ', symbol1 === symbol2);

//prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Daniel',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Negrisoli Batista'
}

console.log(user);

//symbols criam propriedades que não são enuberables
for (const key in user) {
  if (user.hasOwnPoperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//acessando todas as propriedades do objeto
console.log('Todas propriedads do objeto user: ', Reflect.ownKeys(user));

//criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
};
```

```javascript
//1-object.js
let user = {
  name: 'Daniel'
};

console.log(user);
//alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

//criando uma propriedade
user.lastName = 'Negrisoli Batista';
console.log(user);

//deletando uma propriedade
delete user.name;
console.log(user);
```

```javascript
//2-object.js
let user = {
  name: 'Daniel',
  lastName: 'Negrisoli Batista'
};

//recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\Valores das propriedades do objeto user: ', Object.values(user));

//retorna um array de arrays contendo [nome.prop, valor.prop]
console.log('\Lista de propriedades e valores: ', Object.entries(user));

//merge de propriedades de objetos
Object.assign(user, { fullName: 'Daniel Negrisoli Batista'});

console.log('\nAdiciona a propriedade fullName no objeto user: ', user);
console.log('\Retorna um novo objeto mergeando dois ou mais objetos: ', Object.assign({}, user, {age: 36}));

//previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'change';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//permite apenas a alteração de propriedades existetnes em um objeto
const person = { name: 'Daniel' };
Object.seal(person);

person.name = 'Daniel Negrisoli Batista';
delete person.name;
person.age = 36;

console.log('\nVariável person após as alterações: ', person);
```

## Aula II - Functions e operadores

### Functions

```javascript
//1-function.js
function fn() {
  return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  //mais de uma expressão
  return 'Code here';
}

//funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);



//receber e retorna funções
const controlFnExec => fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //executará a função fn
handleFnExecution(); //não executará a funçao fn

//controlFnExec como função
function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  }
}
```

```javascript
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
```

```javascript
//1-array.js
const users = ['Daniel', 'Pedro', 'Jennifer'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Daniel',
    age: 35,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 44,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
];

//retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

//verificar se pe array
console.log('A variável person é um array: ', Array.isArray(persons));

//iterar os itens do array
persons.forEach(person, index, arr => {
  console.log(`Nome: ${person.name} index: ${index}`);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//retornar um novo
const personWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
});

console.log('\nPessoal com a adição do curso: ', personWithCourse);

//transformar um array em outro tipo (primeiro param é o novo item, o segundo param é o item do array)
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('\nSoma de idade das pessoas: ', totalAge);

//justando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
      age += person.age;
      return age;
    }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par: ', totalEvenAges);
```

### Operadores

```javascript
//1-artimeticos.js
//módulo (%)
//operador binário. retorna o inteiro restante da divisão dos dois operadores

12 % 5 // retorna 2

//incremento (++) e decremento (--)
++x
x++

--x
x--

//negação (-) adição (+)
-3
+"3" //retorna 3
+true //retorna 1
+false //retorna 0
-true //retorna -1

//operador de exponenciação (**)
2 ** 3 //retorna 8
10 ** -1 //retorna 0.1

//operador de agrupamento ()
2 * (3 + 2)
```

```javascript
//1-atribuicao.js
//atribuição
x = y

//atribuição de adição
x = x + y //ou
x += y

//atribução de subtração
x = x - y //ou
x -= y

//atribuição de multiplicação
x = x * y //ou
x *= y

//atribuição de divisão
x = x / y //ou
x /= y

//atribuição de resto
x = x % y //ou
x %= y
```

```javascript
//1-comparacao.js

//igual (==)
//retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

//não igual (!=)
//retorna verdadeiro caso os operandos não sejam iguais. var1 != 4
var2 != "3"

//estritamente igual (===)
//retorna verdadeiro caso os operando sejam iguais e do mesmo tipo. Veja támbem Object.
3 === var1

//estritamente não igual (!===)
//retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
var1 !== "3"
3 !== '3'

//maior que (>)
//retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

//maior que ou igual (>=)
//retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
var2 >= var1
var1 >= 3

//menor que (<)
//retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"

//menor que ou igual (<=)
//retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita
var1 <= var2
var2 <= 5
```

```javascript
//1-condicional.js
//ternário
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //retorna 'foo'
false ? 'foo' : 'bar' //retorna 'bar'
```

```javascript
//1-logicos.js
exp1 && exp2

//AND lógico (&&)
var a1 = true && true       //retorna true
var a2 = true && false      //retorna false
var a3 = false && true      //retorna false
var a4 = false && (3 == 4)  //retorna false
var a5 = "Gato" && "Cão"    //retorna Cão
var a6 = false && "Gato"    //retorna false
var a7 = "Gato" && false    //retorna false

//OU lógico (||)
exp1 || exp2

var o1 = true || true       //retorna true
var o2 = false || true      //retorna true
var o3 = true || false      //retorna true
var o4 = false || (3 == 4)  //retorna false
var o5 = "Gato" || "Cão"    //retorna Gato
var o6 = false || "Gato"    //retorna Gato
var o7 = "Gato" || false    //retorna Gato

//exemplo para atribuição de variável
conteudo = conteudo || 'fallback';

//NOT lógico (!)
!exp1

var n1 = !true      //retorna false
var n2 = !false;    //retorna true
var n3 = !"Gato";   //retorna false (string com valor é verdadeira)

//String com valor e sem valor
//True
" "

//False
""
```

```javascript
//1-unarios.js

//deletar algo
delete something;

//determinar o tipo
//O typeof é um operador unário que retorna em um string indicando um tipo de operando.
typeof something;
```

```javascript
//2-binarios.js
//in
something in somethingItems

//arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           //retorna true
3 in arvores;           //retorna true
6 in arvores;           //retorna false
"cedro" in arvores      //retorna false (você deve especificar o número do índice),
                        //não o valor naquele índice
"cedro" in arvores[2]   //retorna true
"length" in arvores     //retorna true (length é uma propriedade de Array)


//objetos predefinidos
"PI" in Math;               //retona true
var minhaString = new String("coral");
"length" in minhaString;    //retorna true


//objetos personalizados
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro;        //retorna true
"modelo" in meuCarro        //retorna true


//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2020, 4, 13);

if(dia instanceof Date) {
  //code here
}
```

## Aula III - Spread, estruturas condicionais e repetição

### Spread

```javascript
//1-spread.js
//spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['caceca', ...partes, 'e', 'pés'];

function fn(x, y, x) { }
var args = [0, 1, 2];
fn(...args);
```

```javascript
//1-if.js
/*
if (condition) {
  //code
}
*/

const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é par`);
  } else {
    console.log(`o número ${item} é impar`);
  }
});
```

```javascript
//1-esle-if.js
/*
if (condidtion) {
  //code
} else if (condition) {
  //code
}
*/

const array = [2, 3, 4, 5, 6, 8, 10, 15];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2`);
  } else if(item % 3 === 0) {
    console.log(`o número ${item} é divisível por 3`);
  } else if(item % 5 === 0) {
    console.log(`o número ${item} é divisível por 5`);
  }
});
```

```javascript
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
```

```javascript
//1-for.js

/*
for ([expressaoInicial]; [condicao]; [incremento]) {
  //code
}
*/

const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`Element #${index}: ${element}`);
}
```

```javascript
//1-for-in-of.js
let arr = [3, 5, 7];
arr.foo = "hello";

//for-in - imprime indices do array
for (let i in arr) {
console.log(i); //0, 1, 2, foo
}

//for-of - imprime valores do array
for (let i of arr) {
  console.log(i); //3, 5, 7
}
```

```javascript
//1-while.js
/*
while(condicao) {
	code
}
*/

var n = 0;
var x = 0;
while(n < 3) {
  n++;
  x += n; //1, 3, 6
}

console.log(x);
```

```javascript
//1-do-while.js
/*
do
 code
while(condicao);
*/

let i = 0;
do {
 i += 1;
 console.log(i);
} while (i < 5);
```

```javascript
//1-controle-repeticao.js
//break
console.log('Exemplo de utilização de break');

var index = 0;

while(true) {
  index++;

  if (index > 2) {
    break;
  }

  console.log(index);
}


//continue
console.log('\nExemplo de utilização de continue');
const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++) {
  const element = array[index];

  if (element % 2 === 0) {
    continue;
  }

  console.log(element);
}
```

# Módulo III - Orientação a objetos e Design Patterns com a linguagem ES6

- Autor: Guilherme Cabrini da Silva
- Origem: Digital Innovation One

## Aula I - Introdução a orientação a objetos

### Herança

Herança é baseada em protótipos, onde é utilizada aparece o tipo prototype, toda vez que é criada uma variável no javascript é criado um referência __proto__ que aponta para o prototype do tipo que criamos, esse tipo é o constructor. Baseado em um constructor é criado um prototype e nessa variável é armazenada a referência __proto__

- baseadas em protótipos
- prototype
- __proto__
- constructor

```javascript
'use strict';
const myText = 'Hello prototype!';
console.log(myText.split('')); //<-- de onde vem o split?

const myText2 = String('Hello prototype!');
console.log(myText2.__proto__.split) //<-- quando é criado uma string é utilizado a função construtora String, essa função construtora carrega um prototype, e toda vez que é criado uma variável utilizando uma função construtora é criada uma referência __proto__ .
```

O que ocorre no javascript ao utilizar *new*?

```javascript
 new Foo(...);
```

1. Um novo objeto é criado, herdando Foo.prototype;
2. A função construtora Foo é chamda com os argumentos específicados e com o *this* vínculado ao novo o obejto criado;
3. Caso a função construtora tenha um retorno explíctio, será respeitado o seu *return*, senão, será retornado o objeto criado no passo 1.

```javascript
//1-heranca.js
//exemplo simples de herança, onde um construtor chama o outro
function Animal(quatidadePatas) {
  this.quatidadePatas = quatidadePatas;
}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);
//Cachorro {quatidadePatas: 4, morde: false}
```

### Classes

- ES6
- simplificação da herança de protótipos
- palavra chave **class**

```javascript
//1-classes.js
'use strict';

class Animal {
  constructor(quatidadePatas) {
    this.quatidadePatas = quatidadePatas
  }
}

class Cachorro extends Animal {
  constructor(morde) {
    super(4);
    this.morde = 4;
  }
}

const pug = new Cachorro(false);
console.log(pug);
//Cachorro {quatidadePatas: 4, morde: false}
```

### Modificadores de acesso

- Javascript não tem, no Node 12 haverá.
- privado / público

```javascript
//1-modificadores-de-acesso.js
'user script';

/*
//como function
function Person(initialName) {
  let name = initialName;

  this.getName = function() {
    return name
  }

  this.setName = function(newName) {
    name = newName;
  }
}
*/

//versão 12
class Person {
  #name = '';

  constructor(initialName) {
    this.#name = initialName;
  }

  getName = function() {
    return this.#name
  }

  setName = function(newName) {
    this.#name = newName;
  }
}


const p = new Person('Daniel');

console.log(p)
//Person {getName: f, setName: f}

p.getName();
//daniel

p.name;
//undefined

p.setName('Thiago');
p.getName();
//Thiago
```

### Encapsulamento

- Oculta detalhes do funcionamento interno

```javascript
//1-encapsulamento.js

'use strict';

//funções
/*
function Person(initialName) {
  var name = initialName;

  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },
    set: function(value) {
      name = value;
    }
  });
}
*/

class Person {
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name;
  }
}
```

### Static

- Acessar métodos/atributos sem instanciar

```javascript
//1-static.js
'use strict';

/*
//function
function Person() {}

Person.walk = function() {
  console.log('walking...');
}

console.log(Person.walk());
//walking...
*/

class Person {
  static walk() {
    console.log('walking..');
  }
}

console.log(Person.walk());
//walking...
```

## Aula II - Introdução a Design Patterns

### Definição

Design Patterns ou padrões de projetos são soluções generalistas para problemas reccorentes durante o desenvolvimento de um software. Não se trata de um framework ou código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

#### A Pattern Language

- 1978
- Christopher Alexander, Sara Ishikawa e Murray Silverstein.
- 253 tipos de problemas/desafios de projetos

#### Formato de um pattern

- Nome
- Exemplo
- Contexto
- Problema
- Solução

#### Using Pattern Languages for Object-Oriented Programs

- 1987
- Kent Beck e Ward Cunningham
- 5 padrões de projeto

#### Design Patters: Elements of Reusable Object-Oriented Software

- 1994
- Gang of four (GoF)
- Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides

### Tipos

#### Criação

Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

##### Padrões de criação

- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton

#### Estruturais

Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para forma estrutura maiores.

##### Padrões estruturais

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Business Delegate
- Flyweight
- Proxy

#### Comportamentais

Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Ele não descrevem apenas padrões de objetos ou de classes, mas também os padroes de comunicação entre os objetos.

##### Padrões comportamentais

- Chain of Responsability
- Command
- Interpreter
- Iterator
- Mediator
- Observer
- State
- Strategy
- Template Method
- Visitor

### Patterns mais utilizados no javascript

#### Factory

Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são considerasd funções *Factory*.

```javascript
//1-factory.js
//Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são considerasd funções *Factory*.

function Pessoa(customProperties) {
  return {
    name: 'Daniel',
    lastName: 'Negrisoli Batista',
    ...customProperties
  }
}

// Factory
const pessoa = Pessoa({name: 'Custom Name', age: 35});
console.log(pessoa);
```

#### Singleton

O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez que for necessário utilizá-la.

```javascript
//2-singleton.js

var SETTINGS = {
  api: 'http://localhost',
  trackJsToken: '12345'
}

//retorna Pessoa.instance quando instanciado, caso contrario instancia e depois devolve
function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }

  return Pessoa.instance
}

const pessoa = Pessoa.call({name: 'Daniel'});

const pessoa2 = Pessoa.call({name: 'Custom Name'});

console.log(pessoa);

console.log(pessoa2);
```

#### Decorator

Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

```javascript
//3-decorator.js

//função
let loggedIn = false;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));
//só executa se logado
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));
```

#### Observer

É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

```javascript
//4-observer.js

class Observable {
  constructor() {
    this.observables = [];
  }

  subscribe(fn) {
    this.observables.push(fn);
  }

  notify(data) {
    this.observables.forEach(fn => fn(data));
  }

  unsubscribe(fn) {
    this.observables = this.observables.filter(obs => obs !== fn);
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');
```

#### Module

É um pattern que possibilita organizarmos melhor o nosso código necessidade de expor variáveis globais.

```javascript
//5-module.js
let name = 'default';

function getName() {
  return name;
}

function setName(newName) {
  name = newName;
}

module.exports = {
  getName,
  setName
};


//6-module-import.js
const {getName, setName} = require('./5-module.js');

console.log(getName());
console.log(setName('Daniel'));
console.log(getName());
```

#### Exercícios - Módulo III - Aula II

**De acordo com o código abaixo, as alternativas corretas são:**

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  return {
    nome,
    idade: 20,
    falar() {
      console.log('objeto falar');
    }
  }
}

Pessoa.prototype.falar = function() {
  console.log('prototype falar');
};

const pessoa = new Pessoa('Foo', 30);
```

**Com base no código acima, observe as afirmativas abaixo:**

I   - O retorno será um objeto "{ nome: 'Foo', idade: 20 }". Pois mesmo chamando a função Pessoa com a palavra-chave new, a função possui retorno explicito.

II  - A expressão "pessoa.constructor === Pessoa" retornará true. Pois como utilizamos a palavra-chave new, sempre será retornado uma instância de pessoa, mesmo quando a função possui retorno explícito.

III - A expressão "pessoa.constructor === Object" retornará true. Pois o retorno da função é um objeto.

IV  - A expressão "pessoa.__proto__.falar === undefined" retornará true. Pois como há retorno explícito de um objeto na função Pessoa, suas definições não são passadas a esse objeto.

V   - Executando a função "pessoa.falar()" será logado no console o texto 'prototype falar'.

R: I, III, IV

**Analise a classe abaixo e seleciona a alternativa em que todas as afirmações são corretas:**

```javascript
class ID {
  static #contador = 0;

  static get contador() {
    return this.#contador;
  }

  static incrementaContador() {
    return ++this.#contador;
  }
}

class Cliente {
  #id = 0;

  constructor() {
    this.#id = ID.incrementaContador();
  }

  get id() {
    return this.#id;
  }
}

const c1 = new Cliente();
console.log(`Contador atual: ${ID.contador}.`);

const c2 = new Cliente();
const c3 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);
```

**As afirmativas abaixo são:**

I   - É possível chamar o método "incrementaContador" sem instanciar a classe ID pois o método possui a palavra-chave static.

II  - A saídas dos console.log são respectivamente: "Contador atual: 1." e "Contador atual: 3.".

III - É possível instanciar a classe ID mas sua instancia não herdará os atributos/métodos com a palavra-chave static.

IV  - Quando uma função possui todos os atributos/métodos static não é possível chamá-la com a palavra-chave new.

V   - Métodos que possuem a palavra-chave static, só podem ser chamados por outros métodos static.

R: I, II, III

**De acordo com o código abaixo, selecione a alternativa em que todas as comparações retornam true:**

```javascript
const name = 'Foo';
const lastName = String('Bar');
```

I   - name.constructor === lastName.constructor

II  - name.prototype === String.prototype

III - lastName.__proto__ === String.prototype

IV  - name.__proto__.split === lastName.__proto__.split

R: I, III, IV

**Analise o código abaixo:**

```javascript
function Conta() {}
  Conta.prototype.rendimento = 0;
  Conta.prototype.depositar = function() {}
  Conta.prototype.retirar = function() {}
  Conta.prototype.exibirSaldo = function() {
    return `O saldo da conta é: ${this.saldo}.`;
}

function ContaPoupanca() {
  this.exibirSaldo = function() {
    return 'Operação não disponível';
  }
}

ContaPoupanca.prototype.rendimento = 0.03;
ContaPoupanca.prototype = Object.create(Conta.prototype);

const contaPoupanca = new ContaPoupanca();
```

**Agora avalie as afirmativas abaixo e assinale a alternativa que apresenta as corretas:**

I   - A variável "contaPoupanca" será uma instância de ContaPoupanca, ou seja, a expressão "contaPoupanca instanceof ContaPoupanca" retornará true.

II  - A variável "contaPoupanca" possuíra os métodos "depositar", "retirar" e "exibirSaldo". Mas a implementação da função "exibirSaldo" não será sobrescrita, pois não é possível sobrescrever propriedades de um prototype.

III - O retorno da função "contaPoupanca.exibirSaldo()" será: "O saldo da conta é: undefined.".

IV  - O valor do atributo "rendimento" da variável "contaPoupanca" será 0.3.

V   - O retorno da função "contaPoupanca.__proto__.exibirSaldo()" será: "O saldo da conta é: undefined.".

R: I, V

**Analisando o código abaixo, quais serão as saídas dos console.log:**

```javascript
function Pessoa(nome) {
  this.nome = nome;
}

function PessoaFisica(nome, cpf) {
  Pessoa.call(this, nome);

  this.cpf = cpf;
}

function PessoaJuridica(nome, cnpj) {
  Pessoa(nome);

  this.cnpj = cnpj;
}

const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');

console.log(pessoaFisica);
console.log(pessoaJuridica);
```

R: 'PessoaFisica {nome: "Foo", cpf: "123.456.670-0"}' e 'PessoaJuridica {cnpj: "12.345.678/9012-34"}'.

**No código abaixo as funções "adicionaUsuarioLogado" e "executaSeUsuarioEstaLogado" são exemplos de qual pattern:**

```javascript
function adicionaUsuarioLogado(fn) {
  const usuarioLogado = {
    nome: 'Foo',
    sobrenome: 'Bar'
  };

  fn(usuarioLogado);
}

function executaSeUsuarioEstaLogado(usuarioLogado, fn) {
  if (!usuarioLogado) {
    console.log('Usuário não está logado.');
    return;
  }

  fn();
}

function notificaUsuarioLogado(usuarioLogado) {
  console.log(`Bem-vindo usuário ${usuarioLogado.nome}!`);
}

adicionaUsuarioLogado(
  usuarioLogado => executaSeUsuarioEstaLogado(usuarioLogado, () => {
    notificaUsuarioLogado(usuarioLogado);
  })
);
```

R: Decorator.

**Analise as funções abaixo e selecione a alternativa em que todas são consideradas Factory:**

```javascript
I -
function exibeNome(nome) {
  console.log(nome);
}

II -
function Pessoa(nome) {
  this.nome = nome;
}

III -
function Pessoa(nome) {
  return {
    nome
  };
}

IV -
function recuperaDadosFormulario(formulario) {
  if (!formulario) {
    return {};
  }

  const dados = {
    nome: formulario.nome,
    idade: formulario.idade
  };

  return dados;
}

V -
function setNome(nome) {
  this.nome = nome;
}
```

R: III, IV

**Na versão 12 do nodejs é possível que uma classe possua propriedades privadas aplicando um prefixo "#" no nome de seus atributos e métodos. Analise a classe abaixo e selecione a informação que possui o que será exibido pelos "console.log" respectivamente:**

```javascript
class Pessoa {
  #nome = '';

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return `Seu nome é: ${this.#nome}.`;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }
}

const pessoa = new Pessoa();

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Foo';
console.log(pessoa.nome);
```

R: "Pessoa {#nome: "Foo"}", "Seu nome é: undefined." e "Seu nome é: Foo."

# Módulo IV - Manipulação e iteração de arrays

- Autor: Guilherme Cabrini da Silva
- Origem: Digital Innovation One

## Aula I - Criando e manipulando arrays

### Criar um array

#### Criação comum

```javascript
//1-criando-arrays.js
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(arr)
console.log(arr2)
```

#### Array.of

Cria uma nova instância de array a partir do número de parâmetros informados.

```javascript
//1-criando-arrays.js
const arr3 = Array.of(1, 2, 3);
console.log(arr3)
```

#### Por instância

Cria uma nova instância de array de acordo com os parâmetros informados

```javascript
//1-criando-arrays.js
const arr4 = Array(3);
console.log(arr4)
// [empty x 3]

const arr5 = Array(3, 2);
console.log(arr5)
// [3, 2]
```

#### Array.from

Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object

```javascript
//1-criando-arrays.js
//node list
const divs = document.querySelectetorAll('div');
//converte para array
const arr6 = Array.from(divs);
console.log(arr6)
```

### Inserir e remover elementos

#### push

Adiciona um ou mais elementos no final do array e retorna o tamanaho do novo array

```javascript
//2-inserir-remover-elementos-arrays.js
const arr1 = ['banana', 'melancia', 'abacate'];
const arr1Length = arr1.push('acerola');

console.log(arr1Length)
//4

console.log(arr1)
//['banana', 'melancia', 'abacate', 'acerola']
```

#### pop

Remove o último elemento de um array e retorna o elemento removido

```javascript
//2-inserir-remover-elementos-arrays.js
const arr2 = ['banana', 'melancia', 'abacate'];
const removedItem = arr2.pop();

console.log(removedItem);
//abacate

console.log(arr2)
//['banana', 'melancia'];
```

#### unshift

Adiciona um ou mais elementos no início do array e retorna o tamanho do novo array

```javascript
//2-inserir-remover-elementos-arrays.js
const arr3 = ['banana', 'melancia', 'abacate'];
const arr3Length = arr2.unshift('acerola');

console.log(arr1Length)
//4

console.log(arr1)
//['acerola', 'banana', 'melancia', 'abacate']
```

#### shift

Remove o primeiro elemento de um array e retorna o elemento removido

```javascript
//2-inserir-remover-elementos-arrays.js
const arr4 = ['banana', 'melancia', 'abacate'];
const removedItemArr4 = arr4.pop();

console.log(removedItemArr4);
//banana

console.log(arr4)
//['melancia', 'abacate'];
```

#### concat

Concatena um ou mais arrays retornando um novo array

```javascript
//2-inserir-remover-elementos-arrays.js
const arr5 = ['banana', 'melancia', 'abacate'];
const arr6 = ['coxinha', 'kibe', 'empada'];
const arr7 = arr5.concat(arr6);

console.log(arr7)
//['banana', 'melancia', 'abacate', 'coxinha', 'kibe', 'empada']
```

#### slice

Retorna um novo array "fatiando" o array de acordo com o início e fim

```javascript
//2-inserir-remover-elementos-arrays.js
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
```

#### splice

Altera um array adicionando novos elementos enquanto remove elementos antigos

```javascript
//2-inserir-remover-elementos-arrays.js
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
```

## Aula II - Iterar, buscar e transformar elementos

### Iterar elementos

#### forEach

Iteração de cada item dentro de um array

```javascript
//3-iterar.js
const arr1 = [1, 2, 3, 4, 5];

//forEach
//Iteração de cada item dentro de um array
arr1.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});
```

#### map

Retorna um novo array, de mesmo tamanho, iterando cada item de um array

```javascript
//3-iterar.js
const arr2 = [1, 2, 3, 4, 5];
const arrMap = arr2.map(value => value * 2);
console.log(arrMap)
```

#### flat

Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)

```javascript
//3-iterar.js
const arr3 = [20, 34, [35, 60, [70, 40]]];
//recebe como parametro a profundidade
const arrFlat = arr3.flat(2)
```

#### flatMap

Retorna um novo array assim como a função map e executa um flat de profundidade 1

```javascript
//3-iterar.js
const arr4 = [1, 2, 3, 4, 5];
const arrFlatMap = arr4.flatMap(value => [value * 2]);

console.log(arrFlatMap);
//[2, 4, 6, 8]
```

#### keys

Retorna um Array Iterator que contém as chaves para cada elemento do array.

```javascript
//3-iterar.js
const arr5 = [1, 2, 3, 4];
const arrIterator = arr.keys();

arrIterator.next();
//{value: 0, done: false}

arrIterator.next();
//{value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: true}
```

#### Values

Retorna um Array Iterator que contém os valores para cada elemento do array

```javascript
//3-iterar.js
const arr6 = [1, 2, 3, 4];
const arrIterator = arr.values();

arrIterator.next();
//{value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: false}

arrIterator.next();
//{value: 4, done: true}
```

#### Entries

Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array

```javascript
//3-iterar.js
const arr6 = [1, 2, 3, 4];
const arrIterator = arr.entries();

arrIterator.next();
//{value: [0, 1], done: false}

arrIterator.next();
//{value: [1, 2], done: false}

arrIterator.next();
//{value: [2, 3], done: false}

arrIterator.next();
//{value: [3, 4], done: true}
```

### Buscar elementos

#### find

Retorna o primeiro item de um array que satisfaz a condição

```javascript
//4-buscar.js
//find
//Retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstGreatThanTwo = arr.find(value => value > 2);

console.log(firstGreatThanTwo);
```

#### findIndex

Retorna o índice do primeiro item de um array que satisfaz a condição

```javascript
//4-buscar.js
const arr2 = [1, 2, 3, 4];
const firstGreatThanTwo2 = arr2.findIndex(value => value > 2);

console.log(firstGreatThanTwo2);
//2
```

#### filter

Retorna um novo array com todos os elementos que satisfazem a condição

```javascript
//4-buscar.js
const arr3 = [1, 2, 3, 4];
const allValuesGreatThanTwo = arr3.findIndex(value => value > 2);

console.log(allValuesGreatThanTwo);
//[3, 4]
```

#### indexOf

Retorna o primeiro índice em que um elemento pode ser encontrado no array

```javascript
//4-buscar.js
const arr4 = [1, 2, 3, 4];
const firstIndexOfItem = arr4.indexOf(3);

console.log(firstIndexOfItem);
//1
```

#### lastIndexOf

Retorna o último índice em que um elemento pode ser encontrado no array

```javascript
//4-buscar.js
const arr4 = [1, 2, 3, 4];
const lastIndexOfItem = arr4.lastIndexOf(3);

console.log(lastIndexOfItem);
//4
```

#### includes

Retorna um booleano verificando se determinado elemento existe no array

```javascript
//4-buscar.js
const arr5 = [1, 3, 3, 4, 3]

const hasItemOne = arr5.includes(1);
//true

const hasItemTwo = arr5.includes(2);
//false
```

#### some

Retorna um bolleano verificando se pelo menos um item do array satisfaz a condição.

```javascript
//4-buscar.js
const arr6 = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr6.some(value => value % 2 === 0);
//true
```

#### every

Retorna um bolleano verificando se todos os itens de um array satisfazem a condição

```javascript
//4-buscar.js
const arr7 = [1, 3, 3, 4, 3];

const allEvenNumbers = arr7.some(value => value % 2 === 0);
//false
```

### Ordenar elementos

#### sort

Ordena os elementos de um array de acordo com a condição

```javascript
//5-ordenar.js
const arr8 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

console.log(arr8.sort((curret, next) => next.grade - curret.grade));
//[{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}]
```

#### reverse

Inverte os elementos de um array

```javascript
//5-ordenar.js
const arr9 = [1, 2, 3, 4, 5]

console.log(arr.reverse());
//[5, 4, 3, 2, 1]
```

### Transforma em outro tipo de dados

#### join

Junta todos os elementos de um array, separados por um delimitador e retorna uma string

```javascript
//6-transformar-dados.js
const arr10 = [1, 2, 3, 4, 5];

console.log('-');
//"1-2-3-4-5"
```

#### reduce

Retorna um novo tipo de dado iterando cada posição de um array

```javascript
//6-transformar-dados.js
const arr2 = [1, 2, 3, 4, 5]

console.log(arr2.reduce((total, value) => total += value, 0));
//15

const arr3 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

//média simples com reduce
console.log(arr3.reduce((totalGrades, student) => totalGrades += student.grade, 0) / arr3.length);
//5.33

console.log(arr3.reduce((studentsNames, student) => studentsNames += student.name + ' ', ''));
//John Jenny Peter
```

### Exercícios

**Assinale a alternativa que possui todas as formas possíveis de criar um array em que seu primeiro elemento possua o valor 2 (tipo** int):

```javascript
I   - [2];
II  - Array.from(2);
III - Array.of(2);
IV  - Array(2);
V   - new Array(2);
```

R: I, III

**Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos nos console.log respectivamente:**

```javascript
const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);
```

R: ["Avó Zeca", "Avô Aroldo"], ["Avô Carlos", "Primo João Paulo"] e ["Avó Zeca", "Avô Aroldo", "Avô Carlos", "Primo João Paulo"]

**Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos no console.log respectivamente:**

```javascript
const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));
```

R: 0, 0, 3, "Cris"

**Assinale a alternativa que possui o valor retornado pela função flat:**

```javascript
const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];

console.log(frutas.flat(2));
```

R: ["amora", "laranja", "melancia", "acerola"]

**Analise o código abaixo e selecione a alternativa que possui as formas possíveis de se remover o item "acerola" alterando o array "frutas":**

```javascript
const frutas = ["melancia", "laranja", "acerola"];

I   - frutas.shift();
II  - frutas.pop();
III - frutas.splice(2, 1);
IV  - frutas.slice(2, 1);
V   - frutas.unshift();
```

R: II e III.

**Analise o código abaixo e assinale a alternativa que possui o valor da variável "colaboradoresComSalario":**

```javascript
const colaboradores = [
  { nome: "Cris", horasTrabalhadas: 220 },
  { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
  const salario = colaborador.horasTrabalhadas * 50;
  colaborador.salario = salario;

  return {
    salario: salario
  };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);

console.log(colaboradoresComSalario);
```

R: [{salario: 11000}, {salario: 10500}]

**De acordo com o código abaixo, o que será exibido no console.log:**

```javascript
const person = ["Cris"];

person.push("James", "Jenny");
person.push("John");

console.log(person);
```

R: ["Cris", "James", "Jenny", "John"]

**Analise o código abaixo e assinale a alternativa que representa os valores corretos que serão exibidos nos console.log respectivamente:**

```javascript
const alunos = [
  { nome: "Cris", nota: 10 },
  { nome: "Alexandre", nota: 7 },
  { nome: "Pablo", nota: 4 }
];

function alunoAprovado(aluno) {
  return aluno.nota >= 7;
}

console.log(alunos.filter(alunoAprovado));
console.log(alunos.some(alunoAprovado));
console.log(alunos.every(alunoAprovado));
```

R: [{ nome: "Cris", nota: 10 }, { nome: "Alexandre", nota: 7 }], true, false

**Analise o código abaixo e selecione a alternativa que possui o valor do array frutas após a execução das funções sort e reverse:**

```javascript
const frutas = ["amora", "laranja", "melancia", "acerola"];

frutas.sort();
frutas.reverse();
```

R: ["melancia", "laranja", "amora", "acerola"]