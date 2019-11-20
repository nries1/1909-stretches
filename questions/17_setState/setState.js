// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.history = [initialState];
  }
  setState(something) {
    this.state = { ...this.state, ...something };
    this.history.push(this.state);
    return this.state;
  }
  goBack() {
    this.history.pop();
    this.state = this.history[this.history.length - 1];
    return this.state;
  }
}

module.exports = { StatefulThing };
