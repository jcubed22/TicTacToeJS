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
    for(var c = 1; c <= colEdge; c++) {
        for(var r = 1; r <= rowEdge; r++) {
            var newSpace = new Space(c,r);
            collectionOfSpaces.push(newSpace);
        }
    }
    this.spaces = collectionOfSpaces;
}

Board.prototype.find = function(x, y) {
    var foundSpace;
    this.spaces.forEach(function(space) {
        if(space.xCoord === x && space.yCoord === y) {
            foundSpace = space;
        }
    });
    return foundSpace;
}


//GAME STUFF


function Game(isActive, playerTurn, players, board, winner) {
    this.isActive = isActive;
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
    var newGame = new Game(false, startingPlayer);
    newGame.createPlayers();
    newGame.createBoard();
}

Game.prototype.playGame = function() {
    do{
        game.newTurn();

        if(game.hasThreeInRow() || game.WHATEVERRULE()) {
            winner = true;
        }
    } while(winner == false);
}

Game.prototype.markSpace = function() {
    var spaceToMark = this.board.find(x,y);
    if(spaceToMark.markedSpace === null) {
        spaceToMark.markedSpace = this.players[playerTurn];
    }
    return false;
}


Game.prototype.newTurn = function() {
    if(this.playerTurn == 0) {
        //player marks space on board

        //assign playerTurn to player 2
    }
    if(this.playerTurn == 1) {
        //player marks space on board

        //assign playerTurn to player 1
    }
}
