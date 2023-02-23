'use strict';

let time = new Date();
console.log('Current time :>> \n', time);

time = new Date(2019, 9, 10, 15, 21, 43);
console.log('Year, Month, Day, hour, min, sec :>> \n', time);

time = new Date("November 6, 2019");
console.log('Initialized with a date string :>> \n', time);

time = new Date("2019-10-20");
console.log('Initialized with (yyyy-mm-dd) :>> \n', time);

console.log('My timezone offset in minutes :>> ', 
            time.getTimezoneOffset());

console.log('The UTC time is :>> ', time.toUTCString());