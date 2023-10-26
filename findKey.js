const findKey = function (object, callback) {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (callback(object[keys[i]])) {
      return keys[i]; 
    }
  }
  return undefined;
};
module.exports = findKey;