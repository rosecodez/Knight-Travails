// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(position) {
    this.position = position;
    this.children = [];
    this.parent = null;
  }
  // do not allow any moves to go off the board
}
class Knight {
  constructor(startingSquare, endingSquare) {
    this.startingSquare = startingSquare;
    // 8 possible moves
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

const gameBoard = () => {
  let columns = 8;
  let rows = 8;
  for (let i = 0; i<)
}
const knight1 = new Knight(startingSquare, endingSquare);
console.log(knight1);

function knightMoves(startingSquare, endingSquare) {
  const visited = [];
  const queue = [];
  let enqueue = 
}
knightMoves[3, 3], [4, 3];
