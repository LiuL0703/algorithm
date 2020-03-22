/**
 * 
Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
Example 3:

Input: matrix = [[7,8],[1,2]]
Output: [7]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct.} matrix 
 
*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const column = matrix.length;
  
  for(let c = 0; c < column; c++){
      let minRow = Math.min(...matrix[c]);
      let pos = matrix[c].indexOf(minRow);
      
      if(minRow === matrix[c][pos]){
         let tmpMaxColumn = matrix[c][pos];
         for(let j = 0; j < column; j++){
             if(matrix[j][pos] > tmpMaxColumn){
                 tmpMaxColumn = matrix[j][pos];
                 break;
             }
         }
         if(tmpMaxColumn === minRow){
             return [tmpMaxColumn];
         }
     }
  }
  return []
};



/**
 * 2020-03-15
 * Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 * Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 */