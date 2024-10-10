var integer = 1;
var double = 1.1;
var negative = -1;

var binary = 0b110111;
var octal = 0o67;
var hex = 0x37;

console.log(binary); // 55
console.log(octal); // 55
console.log(hex); // 55

console.log(binary === octal); // true
console.log(octal === hex); //true

console.log(1 === 1.0); // true
console.log(10 / 0); // Infinity
console.log(10 / -0); //-Infinity
console.log(1 / "string"); //NaN
var str = `Hello
World`;

console.log(str);

var name = "sinjisoo";
var age = 27;

console.log(`My name is ${name} and i am ${age} years old`);

var trueTest = true;
console.log(test); // true

var falseTest = false;
console.log(false); // false

var test;
console.log(test); // undefined

var test = "test";
test = null;

var key = Symbol("key");
console.log(typeof key); // symbol
