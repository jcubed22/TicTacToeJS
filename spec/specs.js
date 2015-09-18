describe('Player', function() {
    it("returns the player's mark", function() {
        var testPlayer = new Player("X");
        expect(testPlayer.mark).to.equal("X");
    });
});

describe('Space', function() {
    it("returns the player's mark", function() {
        var testSpace = new Space(1,2);
        expect(testSpace.xCoord).to.equal(1);
    });
});

describe('Space', function() {
    it("returns the player's mark", function() {
        var testSpace = new Space(1,2);
        expect(testSpace.yCoord).to.equal(2);
    });

    it("lets a player mark a space", function() {
        var testPlayer = new Player("X")
        var testSpace = new Space(1,2);
        testSpace.markBy(testPlayer)
        expect(testSpace.markedBy).to.equal(testPlayer);
    });
});

describe('Board', function() {
    it("returns the boards", function() {
        var testBoard = new Board();
        testBoard.createBoard();
        expect(testBoard.spaces).to.be.an('array');
    });

    it("is able to return a particular space by its coordinates", function() {
        var testBoard = new Board();
        testBoard.createBoard();
        expect(testBoard.find(1,2)).to.equal(testBoard.spaces[1]);
    });
});

describe('Game', function() {
    it("creates two players", function() {
        var testGame = new Game();
        testGame.createPlayers();
        expect(testGame.players).to.eql([testGame.players[0], testGame.players[1]]);
    });

    it("creates tic tac toe board", function() {
        var testGame = new Game();
        testGame.createBoard();
        expect(testGame.board).to.be.an('object');
    });

    it("start game", function() {
        var testGame = new Game(false);
        testGame.startGame();
        expect(testGame.players).to.eql([testGame.players[0], testGame.players[1]]);
        expect(testGame.board).to.be.an('object');
    });

    it("player 1 has won with three in a row", function() {
        var testGame = new Game(false);
        testGame.startGame();
        testFunction();
        expect(testGame.board).to.be.an('object');
    });
});
