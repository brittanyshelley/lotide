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

const middle = function(array) {
  if (array.length <= 2) return [];
  let middle = '';
  let newArray = [];
  if (array.length % 2 === 1) {
    middle = (array.length - 1) / 2;
    newArray.push(array[middle]);
  } else if (array.length % 2 === 0) {
    middle = (array.length / 2);
    newArray.push(array[middle-1], array[middle])
  } 
  return newArray;
}
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

