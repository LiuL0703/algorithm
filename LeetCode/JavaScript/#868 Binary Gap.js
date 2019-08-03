/**
 * 
  Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.
  If there aren't two consecutive 1's, return 0.


  Example 1:

  Input: 22
  Output: 2
  Explanation: 
  22 in binary is 0b10110.
  In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
  The first consecutive pair of 1's have distance 2.
  The second consecutive pair of 1's have distance 1.
  The answer is the largest of these two distances, which is 2.
  Example 2:

  Input: 5
  Output: 2
  Explanation: 
  5 in binary is 0b101.
  Example 3:

  Input: 6
  Output: 1
  Explanation: 
  6 in binary is 0b110.
  Example 4:

  Input: 8
  Output: 0
  Explanation: 
  8 in binary is 0b1000.
  There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
  

  Note:
  1 <= N <= 10^9
 */


/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let binaryN = N.toString(2);
    let res = 0;
    var maxDist;
    
    while(binaryN.length > 0){
      let startPos = binaryN.indexOf('1');
      binaryN = binaryN.slice(startPos+1);
      let endPos = binaryN.indexOf('1');
      if(endPos!==-1){
         maxDist = endPos + 1;
         if(maxDist > res){
           res = maxDist;
         }
      }else{
        break;
      }
    }
    return res;
};


/**
 * Runtime: 52 ms, faster than 88.15% of JavaScript online submissions for Binary Gap.
Memory Usage: 33.9 MB, less than 40.00% of JavaScript online submissions for Binary Gap.
 */
