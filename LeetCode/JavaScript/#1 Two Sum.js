var twoSum = function(nums, target) {
    var len = nums.length;
   for(var i = 0;i<len;i++){
   		for(var j =i+1;j<len;j++){
   			if(nums[i]+nums[j]==target){
   				return [i,j];
   			}
   		}
   }
}

// new Way
const twoSum = function(nums, target) {
	const condition = {};
	for(let i = 0; i < nums.length; i++){
		if(condition[nums[i]] >= 0){
			return [condition[nums[i]], i];
		}
		condition[target - nums[i]] = i;
	}
}
