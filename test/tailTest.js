const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '[]' for ['5']", () => {
    assert.deepEqual(tail([5]), []); 
  });
});  

//const words = ["Lighthouse", "Labs", "Bootcamp"];
//const result = tail(words);


//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(result.length, 2);
//assertEqual(result[0], "Lighthouse");
//assertEqual(result[1], "Labs");