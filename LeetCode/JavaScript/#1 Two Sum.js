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


