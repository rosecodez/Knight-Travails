// eslint-disable-next-line max-classes-per-file
class Node {
  // node constructor that represents a square on the board
  constructor(x, y, path) {
    // coordinates
    this.x = x;
    this.y = y;
    // path that is an array [x,y] showing how the knight reached the square
    // if no path given, start with just this square
    this.path = path || [[x, y]];
  }
}
class Knight {
  constructor(knightPosition) {
    this.knightPosition = knightPosition;
    // 8 possible moves the knight can make from chosen starting position
    // L shape moves
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

  // helper method to check if a move is on the board
  // between 0 and 7
  isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  knightMoves(start, end) {
    const knight1 = new Knight(start);
    console.log(knight1);
    // create node for starting position
    const startNode = new Node(start[0], start[1]);

    // create queue for the squares we will visit and add starting node
    const queue = [startNode];

    // visited array key set
    const visited = new Set([startNode]);

    // while we have a queue
    while (queue.length) {
      const currentNode = queue.shift();
    }
    console.log('path is out of range');
  }
}
// output:
//   > knightMoves([3,3],[4,3])
//  => You made it in 3 moves!  Here's your path:
//  [3,3]
//  [4,5]
//  [2,4]
//  [4,3]
