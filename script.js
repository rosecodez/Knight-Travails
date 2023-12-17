// eslint-disable-next-line max-classes-per-file
class Node {
  // node constructor that represents a square on the board
  constructor(x, y, path) {
    // coordinates
    this.x = x;
    this.y = y;
    // path that is an array [x,y] showing how the knight reached the square
    this.path = path || [x, y];
  }
}
class Knight {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    // 8 possible moves the knight can make from chosen starting position
    this.moves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
  }
}
// output:
//   > knightMoves([3,3],[4,3])
//  => You made it in 3 moves!  Here's your path:
//  [3,3]
//  [4,5]
//  [2,4]
//  [4,3]

// Create gameboard 2Dimensional Array 8x8
// by default all elements have a null value
function createGameBoard() {
  const gameBoard = new Array(8).fill().map(() => new Array(8).fill(null));
  return gameBoard;
}
const gameBoard = createGameBoard();
console.log(gameBoard);

function knightMoves(start, end) {
  const knight1 = new Knight(start);
  console.log(knight1);
  console.log('path is out of range');
}
