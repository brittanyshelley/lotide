const assert = require('chai').assert;
const eqArrays = require("../eqArrays");


//let array1 = [21, 22, 23];
//let array2 = [21, "22", 23];let array3 = [21, 22, 23];
//let array4 = [21, 20];
//let array5 = [null, 22, 23];
//let array6 = [21, 22, undefined];
//let array7 = [21, NaN, 23];

//console.log(eqArrays(array1, array2));
//console.log(eqArrays(array1, array3));
//console.log(eqArrays(array1, array4));
//console.log(eqArrays(array1, array5));
//console.log(eqArrays(array1, array6));
//console.log(eqArrays(array1, array7));


//assertEqual(eqArrays(array1, array2), false); // => should PASS
//assertEqual(eqArrays(array1, array3), true);
//assertEqual(eqArrays(array1, array4), false);
//assertEqual(eqArrays(array1, array5), false);
//assertEqual(eqArrays(array1, array6), true);
//assertEqual(eqArrays(array1, array7), false);


describe("#eqArrays", () => {
  it("returns false when array is different length", () => {
    // arrange
    const longArray =  [21, 22, 23, 24];
    const shortArray =  [21, 22, 23];
    // act
    const result = eqArrays(longArray, shortArray);
    // assert
    assert.isFalse(result);
  });
  it("returns false when array is same length but different types", () => {
    // arrange
    const stringArray =  [21, "22", 23];
    const intArray =  [21, 22, 23];
    // act
    const result = eqArrays(stringArray,intArray);
    // assert
    assert.isFalse(result);
  });
  it("returns true when array is same type", () => {
    // arrange
    const stringArray =  [21, 22, 23];
    const intArray =  [21, 22, 23];
    // act
    const result = eqArrays(stringArray,intArray);
    // assert
    assert.isTrue(result);
  });
});