const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require("./eqArrays");
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require("./countOnly");
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const flatten = require('./flatten');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  letterPositions,
  takeUntil,
  without,
  eqObjects,
  findKey,
  findKeyByValue,
  assertEqual,
  flatten
};
