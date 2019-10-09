function times(num) {
    if (typeof num !== 'number') throw 'Numbers only!';
    return function(input) {
        if (typeof input !== 'number') throw 'Numbers only!';
        return input * num;
    }
}

module.exports = { times };
