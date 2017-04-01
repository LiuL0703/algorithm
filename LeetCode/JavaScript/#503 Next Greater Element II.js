var nextGreaterElements = function(nums) {
    var len = nums.length;
    var i,j,temp,flag;
    var result = [];
    
    Outer:
	    for(i=0;i<len;i++){
	    	temp = i+1;
	    	result[i] = -1;
	    	flag = true;
	    	for(j = temp;j<len;j++){
	    		if(nums[j]>nums[i]){
	    			result[i] = nums[j];
	    			continue Outer;
	    		}
	    	}
	    	if(j===len&&flag===true&&i!==0){
    			flag = false;
    			for(j = 0;j<i;j++){
    				if(nums[j]>nums[i]){
		    			result[i] = nums[j];
		    			continue Outer;
		    		}
    			}
    		}
	    }
		return result;
};
