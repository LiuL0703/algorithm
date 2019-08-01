/**
 * Let's call an array A a mountain if the following properties hold:
 * 
 * A.length >= 3
 * There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
 * 
 * Example 1:
 * Input: [0,1,0]
 * Output: 1
 * 
 * Example 2:
 * Input: [0,2,1,0]
 * Output: 1
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  if(!A) return;
  let lens = A.length;
  let res = 0;
  for(let i = 0; i < lens; i++){
      if(A[res] < A[i] ){
          res = i;
      }
  }
  return res;
};


/**
 * Runtime: 60 ms, faster than 43.98% of JavaScript online submissions for Peak Index in a Mountain Array.
 * Memory Usage: 35.4 MB, less than 15.28% of JavaScript online submissions for Peak Index in a Mountain Array.
 */
