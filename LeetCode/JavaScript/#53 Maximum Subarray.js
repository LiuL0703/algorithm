/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if(nums.length===1) return nums[0];
    var sum = nums[0];
    var this_sum = nums[0];
    var len = nums.length;
    for(let i =1;i<len;i++){
    	this_sum =Math.max(nums[i],this_sum+nums[i]);
    	sum = Math.max(this_sum,sum);
    }
    return sum;
};