var nextGreaterElement = function(findNums, nums) {
    var result = [];
   	var i,j;
   	var len1 = findNums.length;
   	var len2 = nums.length;
   	for(i=0;i<len1;i++){
   		var temp = nums.indexOf(findNums[i]);
   		if(temp===len2){
   			result.push(-1);
   		}else{
   			for(j = temp;j<len2;j++){
   				if(findNums[i]<nums[j]){
   					result.push(nums[j]);
   					break;
   				}
   			}
   			if(j === len2){
   				result.push(-1);
   			}
   		}
   	}
   	return result;
};