const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };


assertObjectsEqual(shirtObject, anotherShirtObject); // => should PASS
assertObjectsEqual(longSleeveShirtObject, shirtObject);

