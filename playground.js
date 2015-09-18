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

    //check if user has more than 3 marks on board, if not return false
    if(test.length >= 3) {
        //in here compare the currentPlayer's spaces to each individual winning indexes
        for (var i = 0; i <= winningIndexes.length; i++) {
            var counter = 0;
            for (var j = 0; j <= test.length; j++) {
                if (winningIndexes[i][j] === test[j]) {
                    counter++;
                    if (counter === 3) {
                        return true;
                    }
                }
                //if there is no match, remove the condition from list
                //to improve search speed
                if (winningIndexes.length >= 1) {
                    winningIndexes.splice([i]);
                }
            }
        }
    }
    return false;
}
