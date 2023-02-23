'use strict';
/* 
try {

    document.write("Welcome guest!");
    document.write(Null);
    console.log('No error!');

} catch(err) {

    console.log(err.message);

} */

function isEven() {

    var a;
    a = document.getElementById("num").value;

    try {

        if((a % 2) == 0) {
            console.log('The number entered is even');
        } else {
            throw " not an even number";
        }

    } catch(msg) {
        
        console.log('The entered value is' + msg );

    } finally {

        console.log('I get executed regardless of the try/catch result.');

    }

}