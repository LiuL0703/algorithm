/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    var count = 0;
    var pos;
    while(nums.indexOf(0)!==-1&&count!==len){
      pos = nums.indexOf(0);
      nums[len] = 0;
      nums.splice(pos,1);
      count++;
    }
};