function isEqual(obj1, obj2) {
  return Object.keys(obj1).reduce((equality, key) => {
    if (equality === false) return false;
    if (obj1[key] === obj2[key] && obj2.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  }, true);
}

module.exports = { isEqual };
