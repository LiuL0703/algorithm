/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    var len = nums.length;
    if(len<=2){
    	return Math.max(...nums);
    }
    if(len===3){
    	return Math.min(...nums);
    }
    nums = nums.sort((a,b)=>{return b-a;})
    return nums[2];
};

var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    var len = nums.length;
    if(len<=2){
    	return Math.max(...nums);
    }
    if(len===3){
    	return Math.min(...nums);
    }
    var count = 0;
    var temp = 0;
    while(count<2){
        temp = Math.max(...nums);
        nums.splice(nums.indexOf(temp),1);
    	count++;
    }
    return Math.max(...nums);
};