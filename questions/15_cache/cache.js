function cache(fnc) {
  if (Object.prototype.toString.call(fnc).match(/Function/g) === null)
    throw new Error('Input must be a function.');
  let allArguments = [];
  return function() {
    const currentArgs = [...arguments];
    allArguments.push(currentArgs);
    let countOfArgumentCalls = 0;
    // for (let i = 0; i < allArguments.length; i++) {
    //   for (let a = 0; a < currentArgs.length; a++) {
    //     let currentArgMatches = 0;
    //     if (currentArgs[a] === allArguments[i][a]) {
    //       currentArgMatches++;
    //     }
    //     if (currentArgMatches === currentArgs.lenght) {
    //       countOfArgumentCalls++;
    //     }
    //   }

    //   if (countOfArgumentCalls <= 1) {
    //     fnc();
    //   }
    // }
    fnc();
  };
}

module.exports = { cache };
