/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	nums = nums.sort((a,b)=>{return a-b});
	var len = nums.length;
	for(let i =0;i<nums[len-1];i++){
		if(i!==nums[i]){
			return i;
		}
	}
	return len;
};

var missingNumber = function(nums) {
	len = nums.length
    var sums = (1+len)/2*len;
    var sum =nums.reduce((acc,val)=>{return acc+val;});
    return sums-sum;
};
