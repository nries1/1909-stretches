class Calculator {
  constructor() {
    this.value = 0;
  }
  add(num) {
    this.value += num;
    return this;
  }
  subtract(num) {
    this.value -= num;
    return this;
  }
  divide(num) {
    if (num === 0) return;
    this.value /= num;
    return this;
  }
  multiply(num) {
    this.value *= num;
    return this;
  }
  clear() {
    this.value = 0;
    return this;
  }
}

module.exports = { Calculator };
