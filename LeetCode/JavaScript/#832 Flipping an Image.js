/**
 * Given a binary matrix A, we want to flip the image horizontally, 
 * then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.  For example,
 *  flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * To invert an image means that each 0 is replaced by 1,
 *  and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 */

 /**
  * Input: [[1,1,0],[1,0,1],[0,0,0]]
  * Output: [[1,0,0],[0,1,0],[1,1,1]]
  * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
  * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
  */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  if(!A) return;
  let res =[];
  let ALens = A.length;
  for(let i = 0; i < ALens; i++){
    res.push([]);
    while(A[i].length > 0){
      res[i].push(A[i].pop()^1);
    }
  }
  return res;
};

// Second
var flipAndInvertImage = function(A) {
  if(!A) return;
  return A.map(row=> row.reverse().map(item => item ^ 1));
};
