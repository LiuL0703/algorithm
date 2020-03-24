/**
 * Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.

If there is no such integer in the array, return 0.

 

Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation:
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.
 

Constraints:

1 <= nums.length <= 10^4
1 <= nums[i] <= 10^5
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] < 6){
          continue;
      }else{
          let tmpSum = nums[i]+1;
          let count = 0;
          const end = Math.floor(nums[i]/2);
          for(let k = 2; k <= end; k++){
              if(nums[i]%k === 0){
                  if(count > 2){
                    break;
                  }
                  count++
                  tmpSum += k;
              }
          }
          if(count === 2){
              sum += tmpSum;
          }
      }
  }
  
  return sum;
};