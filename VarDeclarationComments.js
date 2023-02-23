"use strict";

// Assign value using var keyword
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of price1 and price2 = ", total);

// Updating variable declared with var

price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("Updating sum of price1 and price2 = ", total);

// Re-declaring the variables with var

var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log("Updating sum of the re-declared price1 and price2 = ", total);

// Assign value using let keyword

let dividend = 420;
let divisor = 20;

console.log("The division result : ", dividend/divisor);

// Update value using let keyword

dividend = 720;
divisor = 30;

console.log("The updated division result : ", dividend/divisor);

/* Let does not permit re-declaration.
once a variable has been declared with let,
it can be updated but not redeclared
*/

/*let dividend = 880;
let divisor = 40;

console.log("The division result after re-declaration: ", dividend/divisor);*/

/* The const keyword represents constants.
Constants can only be defined once.
Updates and re-definitions are not permitted
*/

const MY_BIRTHDAY = '10/29/1995';
console.log("My Birthday is on: ", MY_BIRTHDAY);

// MY_BIRTHDAY = '10/29/2005';

// const MY_BIRTHDAY = '10/29/2005';

// Variable hoisting

// When using var, a variable can be used before initialization
// This is know as variable hoisting
a = 5;
console.log("The value of a = ", a);
var a;

// With let and const, variable hoisting is not possible

// b = 5;
// console.log("The value of b = ", b);
// let b;

// C = 5;
// console.log("The value of C = ", C);
// const C;
