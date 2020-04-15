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