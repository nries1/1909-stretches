const multiply = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    throw new Error('stop that');
  return num1 * num2;
};

module.exports = { multiply };
