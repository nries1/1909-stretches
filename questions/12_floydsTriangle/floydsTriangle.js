// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  // let out = [];
  // for (let i = 0; i < n; i++) {
  //     let row = [];
  //     for (let k = 0; k <= i; k++) {

  //     }
  // }

  let out = '';
  for (let i = 0; i < n; i++) {
    let row = i;
    for (let k = 0; k <= i; k++) {
      row++;
      out += row.toString();
    }
    out += '\n';
  }
  return out;
};

module.exports = { floydsTriangle };
