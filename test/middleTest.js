const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


let array1 = [21, 22, 23, 24, 25, 26, 27, 28, 29];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let array3 = [21, 22, 23];
let array4 = [21, 20];

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);