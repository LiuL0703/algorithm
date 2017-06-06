/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    var res = 0;
    for(let i = len-1; i >=0; i--){
      if(nums[i]===val){
        nums.splice(i,1);
      }else{
        res++;
      }
    }
    return res;
};