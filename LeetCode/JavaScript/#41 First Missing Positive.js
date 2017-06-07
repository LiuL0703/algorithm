/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if(nums.length===0) return 1;
    var flag = 1;
    while(nums.indexOf(flag)!==-1){
      flag++;
    }
    return flag;
};