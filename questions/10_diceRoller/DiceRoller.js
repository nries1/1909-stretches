// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sidesPerDie, totalDice) {
    if (
      !(sidesPerDie > 0) ||
      !(typeof sidesPerDie === 'number') ||
      !(totalDice > 0) ||
      !(typeof totalDice === 'number')
    ) {
      throw 'just stop';
    }
    this.history = [];
  }
  roll() {
    this.rolls.push(1);
  }
}

module.exports = { DiceRoller };
