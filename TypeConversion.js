'use strict';

let num = 25;
let str = "350";
let boolean = true;
let date = new Date('2019-01-22');

console.log('Type of num :>> ', typeof(num));
console.log('Type of str :>> ', str);
console.log('Type of boolean :>> ', typeof(boolean));
console.log('Type of date :>> ', typeof(date));

let num_str = String(num);
console.log('Type of num cast to String :>> ', typeof(num_str));
console.log('Value of num cast to String :>> ', num_str);

let str_num = Number(str);
console.log('Type of str cast to Number :>> ', typeof(str_num));
console.log('Value of str cast to Number :>> ', str_num);

let boolean_str = String(boolean);
console.log('Type of boolean cast to String :>> ', typeof(boolean_str));
console.log('Value of boolean cast to String :>> ', boolean_str);

let boolean_num = Number(boolean);
console.log('Type of boolean cast to Number :>> ', typeof(boolean_num));
console.log('Value of boolean cast to Number :>> ', boolean_num);

let date_str = String(date);
console.log('Type of date cast to String :>> ', typeof(date_str));
console.log('Value of date cast to String :>> ', date_str);

let date_num = Number(date);
console.log('Type of date cast to Number :>> ', typeof(date_num));
console.log('Value of date cast to Number :>> ', date_num);

console.log('Value of num cast to Boolean :>> ', Boolean(num));
console.log('Value of str cast to Boolean :>> ', Boolean(str));
console.log('Value of date cast to Boolean :>> ', Boolean(date));
console.log('Boolean value of zero :>> ', Boolean(0));
console.log('Boolean value of empty string :>> ', Boolean(""));

console.log('Value of null cast to String :>> ', String(null));
console.log('Value of null cast to Number :>> ', Number(null));
console.log('Value of null cast to Boolean :>> ', Boolean(null));