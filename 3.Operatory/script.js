//zadanie 1
let a = true;
let b = false;

//false
console.log(a === b);

//zadanie 2
let c = 5;
let d = 8;
let moduloResult = 0;
moduloResult = c % d;
console.log(moduloResult);

//zadanie 3
let str1 = "aaa";
let str2 = "bbb";
let stringsResult = "";
stringsResult = str1 + str2;
console.log(stringsResult);

//zadanie 4

var someNumber = 425;
var someString = "425";

//true, nie porownujemy typów zmiennej
console.log(someNumber == someString);

//false, porownujemy typy zmiennej
console.log(someNumber === someString);

//zadanie 5

let counter = 30;
console.log(counter++);
console.log(counter--);

//zadanie 6
let num1 = 10;
let num2 = 12;
let result = null;
result = num1 > num2;
console.log(result);