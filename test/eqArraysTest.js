const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

let array1 = [21, 22, 23];
let array2 = [21, "22", 23];
let array3 = [21, 22, 23];
let array4 = [21, 20];
let array5 = [null, 22, 23];
let array6 = [21, 22, 23];
let array7 = [21, 22, undefined];
let array8 = [21, NaN, 23];

console.log(eqArrays(array1, array2));
console.log(eqArrays(array1, array3));
console.log(eqArrays(array1, array4));
console.log(eqArrays(array1, array5));
console.log(eqArrays(array1, array6));
console.log(eqArrays(array1, array7));
console.log(eqArrays(array1, array8));

assertEqual(eqArrays(array1, array2), false); // => should PASS
assertEqual(eqArrays(array1, array3), true);
assertEqual(eqArrays(array1, array4), false);
assertEqual(eqArrays(array1, array5), false);
assertEqual(eqArrays(array1, array6), true);
assertEqual(eqArrays(array1, array7), false);
assertEqual(eqArrays(array1, array8), false);