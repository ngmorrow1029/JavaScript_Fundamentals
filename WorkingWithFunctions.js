'use strict';

function mphToKmph(mph) {

    console.log('MPH value entered :>> ', mph);

    return 1.61 * mph;

}

let speedLimit = mphToKmph(65);
console.log('Speed limit in Km/h :>> ', speedLimit);

let mphToKmphArrow = mph => {

    console.log('MPH value entered :>> ', mph);

    return 1.61 * mph;

}

speedLimit = mphToKmphArrow(65);
console.log('Speed limit in Km/h (arrow) :>> ', speedLimit);

let mphToKmphImplicit = mph => 1.61 * mph;

speedLimit = mphToKmphImplicit(65);
console.log('Speed limit in Km/h (implicit return) :>> ', speedLimit);

let triangleArea = (base, height) => 0.5 * base * height;
console.log('Triangle area with a base 5 and a height 4 :>> ', triangleArea(5, 4));

let functionCopy = triangleArea;
console.log('Area of a triangle with a base of 8 and a height of 14 :>> ', functionCopy(8, 14));

var x = function(f){ return 5 * (f-32) / 9 };
console.log('50F in celsius is :>> ', x(50));
