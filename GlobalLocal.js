// 'use strict';

let globalLet = "This is a global variable declared with let";
var globalVar = "This is a global variable declared with var";

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;

function firstFunction() {

    let localLet = "This is a local variable declared with let";
    var localVar = "This is a local variable declared with var";
    undeclaredLocalVar = "This is an undeclared variable";

    // console.log('globalLet from inside firstFunction :>> ', globalLet);
    // console.log('globalVar from inside firstFunction :>> ', globalVar);

    // console.log('numLet from inside firstFunction :>> ', numLet);
    // console.log('numVar from inside firstFunction :>> ', numVar);
    // console.log('NUM_CONST from inside firstFunction :>> ', NUM_CONST);

    // console.log('localLet from inside firstFunction :>> ', localLet);
    // console.log('localVar from inside firstFunction :>> ', localVar);
    // console.log('undeclaredLocalVar from inside firstFunction :>> ', undeclaredLocalVar);

}

firstFunction();

/* console.log('globalLet from outside the function :>> ', globalLet);
console.log('globalVar from outside the function :>> ', globalVar);

console.log('numLet from outside the function :>> ', numLet);
console.log('numVar from outside the function :>> ', numVar);
console.log('NUM_CONST from outside the function :>> ', NUM_CONST);

// console.log('localLet from outside the function :>> ', localLet);

// console.log('localVar from outside the function :>> ', localVar);
// Even with var, the scope of the variable is limited to the containing function.

console.log('undeclaredLocalVar from outside the function :>> ', undeclaredLocalVar);
// If you do not declare a variable, it's scope becomes global. Bad practice.

function secondFunction() {

    let numLet = 100;
    var numVar = 200;
    let NUM_CONST = 300;

    console.log('Redeclared numLet from inside secondFunction :>> ', numLet);
    console.log('Redeclared numVar from inside secondFunction :>> ', numVar);

}

secondFunction();

console.log('numLet from outside after invoking secondFunction :>> ', numLet);
console.log('numVar from outside after invoking secondFunction :>> ', numVar);
console.log('NUM_CONST from outside after invoking secondFunction :>> ', NUM_CONST);

function thirdFunction() {

    numLet = 1000;
    numVar = 2000;
    // NUM_CONST = 3000;

    console.log('Updated numLet from inside thirdFunction :>> ', numLet);
    console.log('Updated numVar from inside thirdFunction :>> ', numVar);

}

thirdFunction();

console.log('numLet from outside after invoking thirdFunction :>> ', numLet);
console.log('numVar from outside after invoking thirdFunction :>> ', numVar);
*/

function fourthFunction() {

    console.log('Starting first for loop...');

    for (let i = 0; i < 10; i++) {
        console.log('i :>> ', i);
    }

    // console.log('Value of i from fourthFunction :>> ', i);

    for (var j = 0; j < 10; j++) {
        console.log('j :>> ', j);
    }

    console.log('Value of j from fourthFunction :>> ', j);
    // Variables declared with 'let' bind to the containing block,
    // but variables declared with 'var' bind to the containing function

}

fourthFunction();

// console.log('Value of i from outside fourthFunction :>> ', i);
// console.log('Value of j from outside fourthFunction :>> ', j);