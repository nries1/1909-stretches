const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('hello')).toThrow();

    expect(() => multiply(null)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof multiply(2, 3)).toBe('number');

    // test that the returned value is correct
    expect(multiply(2, 2)).toBe(4);

    // test some other values
    expect(multiply(5, 0)).toBe(0);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    const getRandomInput = () => {
      const num1 = Math.random();
      const num2 = Math.random();
      const num3 = num1 * num2;
      return [num1, num2, num3];
    };
    let [a, b, c] = getRandomInput();
    expect(multiply(a, b)).toBe(c);
    [a, b, c] = getRandomInput();
    expect(multiply(a, b)).toBe(c);
    [a, b, c] = getRandomInput();
    expect(multiply(a, b)).toBe(c);
  });
});
