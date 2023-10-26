# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @brittanyshelley/lotide`

**Require it:**

`const _ = require('@brittanyshelley/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`:returns first item in array
* `tail(arr)`:returns last item in array
* `middle(array)`:returns middle item in array of odd length or the middle two items in an array of even length
* `eqArrays(arr1, arr2)`:returns true or false when comparing two arrays
* `assertArraysEqual(array1, array2)`:compares two arrays for strict equality and logs output to console
* `assertObjectsEqual(object1, object2)`: compares two objects for strict equality and logs assertion message to console
* `countLetters(string)`:iterates over string and returns how many times each letter was found
* `countOnly(allItems, itemsToCount)`:iterates over array (allItems) and returns the number of times each (itemsToCount) appear in the array
* `letterPositions(sentence)`:returns the letters in the string and at what index each of them occur
* `takeUntil(array, callback)`:pushes each element in array to a new array until the callback returns true, then outputs new array
* `without(source, itemsToRemove)`:takes one array (source) and returns a new array with (itemsToRemove) removed
* `eqObjects(object1, object2)`:compares two objects and returns whether they are equal or not (true or false)
* `findKey(object, callback)`:applys callback function to every key of object and returns the key when it's true
* `findKeyByValue(obj, val)`:searches object keys for specified value then returns that key when it's true
* `assertEqual(actual, expected)`:compares two strings to see is they are the same then returns failed or passed
* `flatten(array)`:flattens nested arrays into one and returns the new array
