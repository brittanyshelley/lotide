const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const exampleObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function (object, callback) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]])) {
      return keys[i]; 
    }
  }
  return undefined;
};
console.log(findKey(exampleObj, function (value) { return value.stars === 3}), "Akaleri");

assertEqual(findKey(exampleObj, function (value) { return value.stars === 2}), "noma");
assertEqual(findKey(exampleObj, function (value) { return value.stars === 3}), "Akaleri");