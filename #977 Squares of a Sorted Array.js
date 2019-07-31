/**
 * Given an array of integers A sorted in non-decreasing order,
 *  return an array of the squares of each number, 
 * also in sorted non-decreasing order
 * 
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 */


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  if(!A) return;
  return A.map(item=>Math.pow(item,2)).sort((a,b)=> a -b);
};
