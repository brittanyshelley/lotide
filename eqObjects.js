const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; 
  }
  for (const key of Object.keys(object1)) { 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { 
      if (!eqArrays(object1[key], object2[key])) { 
        return false;
      }
    }
    if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] instanceof Object && object2[key] instanceof Object) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
    }
    else {
      if (object1[key] !== object2[key]) { 
        return false;
      }
    }
  } 
  return true;
};
module.exports = eqObjects;
