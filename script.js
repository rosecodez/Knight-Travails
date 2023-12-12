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
  constructor(current, nextMove) {
    this.root = null;
    this.current = current;
    this.nextMove = nextMove;
  }
}
// output:
//   > knightMoves([3,3],[4,3])
//  => You made it in 3 moves!  Here's your path:
//  [3,3]
//  [4,5]
//  [2,4]
//  [4,3]
