const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  const mockFunc = jest.fn(() => func);
  let outputs = [];
  for (let i = 0; i < n; i++) {
    outputs.push(mockFunc());
  }
};

module.exports = { repeater };
