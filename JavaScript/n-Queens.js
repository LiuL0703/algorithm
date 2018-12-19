class QueenPosition {
  /**
   * @param {number} rowIndex
   * @param {number} columnIndex
   */
  constructor(rowIndex, columnIndex){
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }


  /**
   * @return {number}
   * 每个左对角线的位置上有相同的行列差值
   */
  get leftDiagonal() {
    return this.rowIndex - this.columnIndex;
  }

  /**
   * @return {number}
   * 每个右对角线的位置上有相同的行列和 
   * @see https://youtu.be/xouin83ebxE?t=1m59s
   */
  get rightDiagonal() {
    return this.rowIndex + this.columnIndex;
  }

  toString() {
    return `${this.rowIndex},${this.columnIndex}`;
  }
}



/**
 * @param {QueenPosition[]} queenPositions
 * @param {number} rowIndex 
 * @param {number} columnIndex 
 * @return {boolean}
 */
function isSafe(queenPositions, rowIndex, columnIndex) {
  const newQueenPosition = new QueenPosition(rowIndex, columnIndex);

  for( let queenIndex = 0; queenIndex < queenPositions.length; queenIndex += 1) {
    const currentQueenPosition = queenPositions[queenIndex];

    if(currentQueenPosition && 
      (
        newQueenPosition.rowIndex === currentQueenPosition.rowIndex
        || newQueenPosition.columnIndex === currentQueenPosition.columnIndex
        || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal
        || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal
      )) {
      
      return false;
    }
  }
  return true;
}


/**
 * @param {QueenPosition[][]} solutions 
 * @param {QueenPosition[]} previousQueensPosition 
 * @param {number} queenCount 
 * @param {number} rowIndex 
 * @return {boolean}
 */
function nQueensRecursive(solutions, previousQueensPosition, queenCount, rowIndex){
  const queensPositions = [...previousQueensPosition].map((queenPosition) => {
    return !queenPosition ? queenPosition : new QueenPosition(
      queenPosition.rowIndex,
      queenPosition.columnIndex
    );
  })

  if(rowIndex === queenCount) {
    solutions.push(queensPositions);
    return true;
  }

  for (let columnIndex = 0; columnIndex < queenCount; columnIndex += 1) {
    if (isSafe(queensPositions, rowIndex, columnIndex)) {
      queensPositions[rowIndex] = new QueenPosition(rowIndex, columnIndex);
      nQueensRecursive(solutions, queensPositions, queenCount, rowIndex+1);
      queensPositions[rowIndex] = null;
    }
  }
  return false;
}

/**
 * 
 * @param {number} queenCount 
 * @return {QueenPosition[][]}
 */
function nQueens(queenCount){
  const queenPositions = Array(queenCount).fill(null);
  const solutions = [];
  nQueensRecursive(solutions, queenPositions, queenCount, 0);
  return solutions;
}
