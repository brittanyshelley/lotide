// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    //comparing elements in arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

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

assertEqual(eqArrays(array1, array2), true); // => should PASS
assertEqual(eqArrays(array1, array3), true);
assertEqual(eqArrays(array1, array4), true);
assertEqual(eqArrays(array1, array5), true);
assertEqual(eqArrays(array1, array6), true);
assertEqual(eqArrays(array1, array7), true);
assertEqual(eqArrays(array1, array8), true);
