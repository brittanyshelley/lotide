const assert = require('chai').assert;
const countLetters = require('../countLetters');
//console.log(countLetter("LHL"));
console.log(countLetters("LHL"));
console.log(countLetters("Lighthouse in the house"));
//console.log(countLetter("Lighthouse in the house"));
const result = countLetters("LHL");
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);