1 <= A.length <= 50000
-100000 <= A[i] <= 100000
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length <= 2){
      return true;
    }
    let lensA = A.length;
    let isBig;
    let pos;
    for(let i = 0; i < lensA - 1; i++){
      if(A[i]!== A[i+1]){
        isBig = A[i] > A[i+1];
        pos = i + 1;
        break;
      }
    }
    for(let i = pos; i < lensA - 1; i++){
      if(isBig){
        if(A[i] < A[i+1]){
          return false;
        }
      }else{
        if(A[i] > A[i+1]){
          return false;
        }
      }
    }
    return true;
};


/**
 * Runtime: 76 ms, faster than 60.83% of JavaScript online submissions for Monotonic Array.
Memory Usage: 40.3 MB, less than 77.78% of JavaScript online submissions for Monotonic Array
 */
