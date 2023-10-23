//This function also includes the spaces
//const countLetter = function(word) {
  //const count = {};
  //for (let i = 0; i < word.length; i++) {
    //const letter = word[i];
    //count[letter] = 1;
    //} else {
      //count[letter]++;
    //}
  //}
  //return count;
//};


const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//console.log(countLetter("LHL"));
console.log(countLetters("LHL"));
console.log(countLetters("Lighthouse in the house"));
//console.log(countLetter("Lighthouse in the house"));
const result = countLetters("LHL");
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);