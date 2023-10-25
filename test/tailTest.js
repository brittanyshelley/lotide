const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Lighthouse", "Labs", "Bootcamp"];
const result = tail(words);


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");