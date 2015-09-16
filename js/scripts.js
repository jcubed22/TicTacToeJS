function Player(mark) {
    this.mark = mark;
}

function Space(xCoord, yCoord, markedBy) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.markedBy = markedBy;
}

Space.prototype.mark_by = function(player) {
    this.markedBy = player;
}

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
