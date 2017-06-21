/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var res = 0;
    var len = nums.length;
    nums = nums.sort((a,b)=>{return a-b});
    for(let i=0;i<len;i+=2){
      res +=nums[i];
    }
    return res;
};