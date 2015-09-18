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

Board.prototype.find = function(id) {

    return this.spaces[id];
}


//GAME STUFF


function Game(isFinished, playerTurn, movesLeft, players, board, winner) {
    this.isFinished = isFinished;
    this.playerTurn = playerTurn;
    this.movesLeft = movesLeft;
    this.players = players;
    this.board = board;
    this.winner = winner;
}

//getters for variables
Game.prototype.getCurrentPlayerMark = function() {
    return this.players[this.playerTurn].mark;
}

Game.prototype.getCurrentPlayerName = function() {
    return this.players[this.playerTurn].playerName;
}

Game.prototype.getMark = function(id) {
    var playerSpaces = [];

    for(space in this.board.spaces) {
        playerSpaces.push(this.board.spaces[space]);
    }

    return playerSpaces[id].markedBy;
}

Game.prototype.getCurrentPlayer = function() {
    return this.playerTurn;
}

Game.prototype.getGameStatus = function() {
  return this.isFinished;
}
Game.prototype.endGame = function() {
  this.isFinished = true;
}

//game handlers
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
    this.movesLeft = 9;
    this.createPlayers();
    this.createBoard();
}

Game.prototype.playGame = function(id) {
  //check if the user has met winning conditions
  if (this.hasThreeInRow(this.getCurrentPlayerMark()) || this.isDraw(this.getCurrentPlayerMark())) {
      this.endGame();
  }
  this.newTurn(id);
}

Game.prototype.newTurn = function(id) {
    //finds the space object user requests to mark
    var spaceToMark = this.board.find(id);

    //verify the space is unoccupied to act upon, or throw error
    if (typeof spaceToMark.markedBy === 'undefined') {
        this.movesLeft--;
        //mark the space
        spaceToMark.markedBy = this.getCurrentPlayerMark();

        //assigns next player turn
        if(this.getCurrentPlayer() === 0){
          this.playerTurn = 1;
        } else {
          this.playerTurn = 0;
        }
    } else {
        alert("This space has been marked by " + spaceToMark.markedBy)
    }
}

Game.prototype.hasThreeInRow = function(playerMark) {
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
    for(space in this.board.spaces) {
        if (this.board.spaces[space].markedBy === playerMark) {
            playerSpaces.push(parseInt(space));
        }
    }

    //if the player doesn't have 3 combinations, don't run the loop
    if(playerSpaces.length >= 3) {
        //in here compare the currentPlayer's spaces to each individual winning indexes
        for (var i = 0; i <= winningIndexes.length; i++) {
            var counter = 0;
            for (var j = 0; j <= 2; j++) {
                if (winningIndexes[i][j] === playerSpaces[j]) {
                    counter += 1;
                    if (counter === 3) {
                        this.winner = this.getCurrentPlayerName();
                        return true;
                    }
                }
                return false;
            }
        }
    }
    return false;
}

Game.prototype.isDraw = function() {
    if(this.movesLeft === 0) {
        return true;
    }
    return false;
}

var newGame = new Game(false);
newGame.startGame();

$(document).ready(function() {
    // var newGame = new Game(false);
    // newGame.startGame();

    $(".board div").click(function() {
        var spaceIndex = $(this).attr('class').split(' ')[1];
        var spaceId = $(this).attr('id');
        newGame.playGame(spaceIndex);
        $("#" + spaceId).text(newGame.getMark(spaceIndex));
        if(newGame.getGameStatus()) {
          alert("GAME OVER BITCHES");
        }
    });
});
