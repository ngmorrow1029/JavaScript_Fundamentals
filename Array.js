'use strict';

let studentGrades = ["A", "B", 3, "D", 5];
/* 
console.log('Length :>> ', studentGrades.length);
console.log('Element at index 3 :>> ', studentGrades[3]);
console.log('Element at index -3 :>> ', studentGrades[-3]); */

var i;
/* for(i=0; i<studentGrades.length; i++) {
    console.log(studentGrades[i]);
}

console.log("Iterating over elements with the ES6 syntax : \n");

for (i of studentGrades) {
    console.log('i :>> ', i);
} */
/* 
console.log("Elements in vowels: \n");

let vowels = new Array("A", "E", "I", "O", "U", "Y");

for(i of vowels) {

    console.log('i :>> ', i);

} */
/* 
let grades = [];
grades[0] = "A"
grades[1] = "B"
grades[2] = "C"
grades[3] = "D"
grades[4] = "E"
grades[7] = "H"

console.log('Length :>> ', grades.length);

console.log("Elements in the grades array: \n");

for(i of grades) {

    console.log('i :>> ', i);

}

console.log(`\nThe elements at index 5 and 6: ${grades[5]} and ${grades[6]}`); */

let testScores = [43, 64, 81, 91, 39, 73];

function flagGoodScore(score) {

    if (score > 70)
        console.log(`The score of ${score} is good!`);

}

console.log("Iterating over the test scores with forEach: ");

testScores.forEach(flagGoodScore);