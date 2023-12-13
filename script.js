// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(location) {
    this.location = location;
    this.children = [];
    this.parents = null;
  }
  // do not allow any moves to go off the board
}
class Knight {
  constructor(startingSquare, endingSquare) {
    this.root = null;
    this.startingSquare = startingSquare;
    this.moves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [-1, -1],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
    this.endingSquare = endingSquare;
  }
}
// output:
//   > knightMoves([3,3],[4,3])
//  => You made it in 3 moves!  Here's your path:
//  [3,3]
//  [4,5]
//  [2,4]
//  [4,3]
function knightMoves(startingSquare, endingSquare) {
  const knight1 = new Knight(startingSquare, endingSquare);
  console.log(knight1);
}
knightMoves[3, 3], [4, 3];
