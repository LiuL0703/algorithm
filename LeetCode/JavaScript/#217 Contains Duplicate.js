/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var res = Array.from(new Set(nums));
    return !(res.length===nums.length);
};

var containsDuplicate = function(nums) {
    var len = nums.length;
    var res = {};
    for(let i= 0;i<len;i++){
    	if(res[nums[i]]){
    		return true;
    	}else{
    		res[nums[i]] = 1;
    	}
    }
    return false;
};