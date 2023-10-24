const letterPositions = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== '') {
      if (results[letter]) {
        results[letter].push(sentence.indexOf(sentence));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);