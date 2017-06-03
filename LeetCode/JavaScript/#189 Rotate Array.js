/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
};

var rotate = function(nums, k) {
    for(var i=nums.length-1; i>=nums.length-k; i--){
        nums.unshift(nums.pop());
    }
};