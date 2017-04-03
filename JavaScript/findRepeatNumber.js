var findRepeatNum=function(nums){
	var len = nums.length;
	var res = {};
	var i;
    for(i=0;i<len;i++){
      	if(!res[nums[i]]){
          	res[nums[i]]=1;
          }else{
          	res[nums[i]]+=1;
          }
      }
    for(var key in res){
  	    console.log(key+"("+res[key]+")");
    }
}