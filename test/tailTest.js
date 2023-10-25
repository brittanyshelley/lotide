const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(words);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");