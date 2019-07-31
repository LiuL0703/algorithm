/**
 * In a array A of size 2N, there are N+1 unique elements, 
 * and exactly one of these elements is repeated N times.Return the element repeated N times.
 * 
 * 
 * Example 1:
 * 
 * Input: [1,2,3,3]
 * Output: 3
 * 
 * Example 2:
 * Input: [5,1,5,2,5,3,5,4]
 * Output: 5
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  if(!A) return;
  let hash = {};
  for(let i of A){
      if(hash[i]){
          return i;
      }else{
          hash[i] = true;
      }
  }
  return;
};
