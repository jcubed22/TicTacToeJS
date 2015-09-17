// PLAYER STUFF

function Player(mark, playerName) {
    this.mark = mark;
    this.playerName = playerName;
}



// SPACE STUFF
function Space(xCoord, yCoord, markedBy) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.markedBy = markedBy;
}

Space.prototype.markBy = function(player) {
    this.markedBy = player;
}

//BOARD STUFF

function Board(spaces) {
    this.spaces = spaces;
}

Board.prototype.createBoard = function() {
    var collectionOfSpaces = [];
    var colEdge = 3; //based on a 3x3 board
    var rowEdge = 3; //based on a 3x3 board
    for (var c = 1; c <= colEdge; c++) {
        for (var r = 1; r <= rowEdge; r++) {
            var newSpace = new Space(c, r);
            collectionOfSpaces.push(newSpace);
        }
    }
    this.spaces = collectionOfSpaces;
}

Board.prototype.find = function(x, y) {
    var foundSpace;
    this.spaces.forEach(function(space) {
        if (space.xCoord === x && space.yCoord === y) {
            foundSpace = space;
        }
    });
    return foundSpace;
}


//GAME STUFF


function Game(isFinished, playerTurn, players, board, winner) {
    this.isFinished = isFinished;
    this.playerTurn = playerTurn;
    this.players = players;
    this.board = board;
    this.winner = winner;
}

Game.prototype.createPlayers = function() {
    var players = [];
    var player1 = new Player("X", "Player 1");
    var player2 = new Player("O", "Player 2");
    players.push(player1, player2);
    this.players = players;
}

Game.prototype.createBoard = function() {
    var ticTacToeBoard = new Board();
    ticTacToeBoard.createBoard();
    this.board = ticTacToeBoard;
}

Game.prototype.startGame = function() {
    //select random player based on array index 0,1
    var startingPlayer = Math.floor(Math.random() * (1 + 1));
    this.playerTurn = startingPlayer;
    this.createPlayers();
    this.createBoard();
}

Game.prototype.playGame = function() {
    do {
        this.newTurn(x, y);

        if (game.hasThreeInRow() || game.isDraw()) {
            this.isFinished = true;
        }
    } while (this.isFinished == false);
}

Game.prototype.newTurn = function(x, y) {

    //PLAYER 1

    if (this.playerTurn == 0) {
        //player marks their position on the board
        var spaceToMark = this.board.find(x, y);

        if (spaceToMark.markedSpace === null) {
            //mark the space
            spaceToMark.markedSpace = this.players[playerTurn];
            //assign playerTurn to player 2
            this.playerTurn = 1;
        } else {
            alert("This space has been marked by " + spaceToMark.markedBy)
        }
    }

    //PLAYER 2
    else if (this.playerTurn == 1) {
        //player marks their position on the board
        var spaceToMark = this.board.find(x, y);

        if (spaceToMark.markedSpace === null) {
            spaceToMark.markedSpace = this.players[playerTurn].mark;

            //assign playerTurn to player 2
            this.playerTurn = 0;
        } else {
            alert("This space has been marked by " + spaceToMark.markedBy)
        }
    }
}

Game.prototype.hasThreeInRow = function() {
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
    //gather all the spaces occupied by player who just went
    var playerSpaces = [];
    this.board.forEach(function(space) {
        if (space.markedBy === this.players[playerTurn]) {
            playerSpaces.push(board.indexOf(space));
        }
    });
    //in here compare the currentPlayer's spaces to each individual winning indexes
    for (var i = 0; i <= winningIndexes.length; i++) {
        var counter = 0;
        for (var j = 0; j <= playerSpaces.length; j++) {
            if (winningIndexes[i][j] === playerSpaces[j]) {
                counter++;
                if (counter === 3) {
                    return true;
                }
            }
        }
    }
    return false;
}

Game.prototype.isDraw = function() {

    return true;
}