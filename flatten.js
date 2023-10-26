const flatten = (array) => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 1) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  console.log(flattenedArray);
};

module.exports = flatten;