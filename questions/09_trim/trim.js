const trim = obj =>
  Object.keys(obj).reduce((newObj, key) => {
    if (obj[key] !== null && obj[key] !== undefined) newObj[key] = obj[key];
    return newObj;
  }, {});

module.exports = { trim };
