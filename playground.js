function testFunction() {
    var winningIndexes = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [3, 4, 5],
        [1, 4, 7],
        [2, 4, 6],
        [6, 7, 8],
        [2, 5, 8]
    ];
    var test = [2, 3, 6, 8];

    //in here compare the xSpaces to each individual winning indexes
    for (var i = 0; i < winningIndexes.length; i++) {
        if (test.equals(winningIndexes[i])) {
            return true;
        }
    }
    return false;
}
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
counter = 0
for (i = 0, i <= winningIndexes.length, i++) {
    for (var j = 0; j < winningIndexes[i]; j++) {
        var counter = 0;
        if (winningIndexes[i] === test[j]) {
            counter++;
            if (counter === winningIndexes.length) {
                return true;
            }
        }
    }
    if indexOf(winningIndexes[i]);