'use strict';

console.log('Logical Operators');

let A = 13, B = 25;

if(A >= 12 && B <= 25)
    console.log('A + B :>> ', A + B);

let X = 15, Y = 20;

if(X > 20 || Y < 25)
    console.log('X + Y :>> ', X + Y);

let result = !(X == Y);
console.log('Result of !(X == Y) :>> ', result);

let condition;

console.log('condition :>> ', condition = (100 > 10) ? true : false);
console.log('condition :>> ', condition = (100 < 10) ? true : false);