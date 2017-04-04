/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	var res = 0;
	var temp;
    nums = nums.join("");
    while(nums.indexOf(0)!==-1){
    	temp = nums.search(0);
    	if(res<temp){
    		res = temp;
    	}
    	nums = nums.slice(temp+1);
    }
    return Math.max(res,nums.length);
};