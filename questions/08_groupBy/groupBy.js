/* eslint-disable no-lonely-if */
const groupBy = (arr, attr) =>
  arr.reduce((sorted, el) => {
    if (typeof attr === 'function') {
      let res = attr(el);
      if (sorted[res]) {
        sorted[res].push(el);
      } else {
        sorted[res] = [el];
      }
    } else {
      if (sorted[el[attr]]) {
        sorted[el[attr]].push(el);
      } else {
        sorted[el[attr]] = [el];
      }
    }
    return sorted;
  }, {});

module.exports = { groupBy };
