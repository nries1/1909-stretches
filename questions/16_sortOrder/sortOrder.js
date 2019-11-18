/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sortKey, returnKey) {
  return arr
    .sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return 1;
      if (a[sortKey] < b[sortKey]) return -1;
      return 0;
    })
    .map(obj => obj[returnKey]);
}

module.exports = { sortOrder };
