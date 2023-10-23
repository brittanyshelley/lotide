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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
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

assertArraysEqual(array1, array2); // => should PASS
assertArraysEqual(array1, array3);
assertArraysEqual(array1, array4);
assertArraysEqual(array1, array5);
assertArraysEqual(array1, array6);
assertArraysEqual(array1, array7);
assertArraysEqual(array1, array8);