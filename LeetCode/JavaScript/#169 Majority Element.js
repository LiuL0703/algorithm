/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var limit = Math.ceil(nums/2);

    var res = {};
    for(var key in nums){
    	if(res[key]){
    		res[key]++;
    		if(res[key]>=limit){
    			return key;
    		}
    	}else{
    		res[key] = 1;
    	}
    } 
};

majorityElement([1]);