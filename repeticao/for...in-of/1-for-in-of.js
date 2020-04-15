//1-for-in-of.js
let arr = [3, 5, 7];
arr.foo = "hello";

//for-in - imprime indices do array
for (let i in arr) { 
	console.log(i); 	//0, 1, 2, foo
}

//for-of - imprime valores do array
for (let i of arr) {
	console.log(i); 	//3, 5, 7
}