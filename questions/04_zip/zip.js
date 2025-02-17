/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

const zip = objs => objs.reduce((totals, obj) => {
  for (let key in obj) {
    if (!totals[key]) {
      totals[key] = obj[key]
    } else {
      totals[key] += obj[key]
    }
  }
  return totals;
}, {})

module.exports = { zip };
