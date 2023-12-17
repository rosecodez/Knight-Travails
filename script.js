// eslint-disable-next-line max-classes-per-file
class Node {
  // node constructor that represents a square on the board
  constructor(position, parent) {
    // knight current position
    this.position = position;
    // knight previous position
    this.parent = parent;
  }
}

class Knight {
  constructor() {
    // 8 possible moves the knight can make from chosen starting position
    // L shape moves
    this.moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];
  }

  // helper method to check if a move is on the board
  // between 0 and 7
  // eslint-disable-next-line class-methods-use-this
  isSquareOnBoard(row, col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  knightMoves(start, end) {
    // create node for starting position
    const rootNode = new Node(start, null);

    // create queue and add starting node inside it
    const queue = [rootNode];

    // track the visited squares
    const visited = new Set(start);

    // mark start position as visited
    visited.add(start);

    // while we have a queue length
    while (queue.length) {
      // remove and get first square from queue
      const currentNode = queue.shift();
      // extract row and column from current node position
      const [currentRow, currentCol] = currentNode.position;

      // check if the current position is the end
      if (currentRow === end[0] && currentCol === end[1]) {
        // print path with current node
        this.printPath(currentNode);
        return;
      }
      // check all possible moves from current position
      this.moves.forEach((move) => {
        // calculate potential next row and column
        const newRow = currentRow + move[0];
        const newCol = currentCol + move[1];

        // combine row and column to store in visited set
        const newPosition = `${newRow},${newCol}`;
        // if new position is on board and its not the visited
        if (this.isSquareOnBoard(newRow, newCol) && !visited.has(newPosition)) {
          // add to queue
          visited.add(newPosition);
          // enqueue the new position as current node
          queue.push(new Node([newRow, newCol], currentNode));
        }
      });
    }
    console.log("path wasn't found");
  }

  printPath(endNode) {
    const path = [];

    // set current node from end
    let currentNode = endNode;

    // while current node is not null
    while (currentNode !== null) {
      // insert the current position at the start of the arrays
      path.unshift(currentNode.position);
      // move to the parent node of current node
      currentNode = currentNode.parent;
    }
    console.log(`You made it in ${path.length} moves! Here is your path:`);
    path.forEach((square) => console.log(`[${square[0]},${square[1]}]`));
  }
}

// output:
//   > knightMoves([3,3],[4,3])
//  => You made it in 3 moves!  Here's your path:
//  [3,3]
//  [4,5]
//  [2,4]
//  [4,3]
const knight1 = new Knight();
knight1.knightMoves([3, 3], [4, 3]);
