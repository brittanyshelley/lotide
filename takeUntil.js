const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = (array, callback) => {
  const result = [];
  for (element of array) {
    if (callback(element)) {
      break;
    } else {
    result.push(element);
    }
  }
  return result;
};  

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);