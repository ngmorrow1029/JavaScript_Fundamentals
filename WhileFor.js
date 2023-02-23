'use strict';

console.log('While Loops:');

console.log('Integers from 1 to 10 :');

let i = 1;

while(i <= 10) {

    console.log('i :>> ', i);

    i++;

}

console.log('Even integers from 1 to 20 :');

i = 1;

while(i <= 20) {

    let num = i % 2;

    if(num == 0)
        console.log('i :>> ', i);

    i++;

}

console.log('Increasing order of series (with breaks) :');

i = 1;

while(i <= 10) {

    console.log('i :>> ', i);

    i++;

    if(i == 5)
        break;

}

console.log('Decreasing order of the series (with continue) :');

i = 12;

while(i > 1) {

    i--;

    if(i == 5)
        continue;
    
        console.log('i :>> ', i);

}

console.log('do-while loops :');

let factorial = 1;
let n = 5;
i = 1;

do {

    factorial *= i;
    i++;

} while (i <= n);

console.log("Factorial of " + n + " = " + factorial);

console.log('Fibinacci series using for loop : ');

let a = 0, b = 1, c;
let count = 10;

for (i = 3; i <= count; i++) {

    c = a + b;
    a = b;
    b = c;

    console.log('c :>> ', c);

}

