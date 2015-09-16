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
        testSpace.mark_by(testPlayer)
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
