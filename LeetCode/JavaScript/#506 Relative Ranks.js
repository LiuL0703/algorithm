/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var temp = [];
    var len = nums.length;
    var i,pos;

    for(var k = 0;k<len;k++){
      temp[k] = nums[k];
    }
    temp = temp.sort(function(a,b){return b-a;});
    for(i=0;i<len;i++){
      pos = nums.indexOf(temp[i]);
      if(i===0){
        nums[pos] = "Gold Medal";
      }else if(i===1){
        nums[pos] = "Silver Medal";
      }else if(i===2){
        nums[pos] = "Bronze Medal";
      }else{
        nums[pos] = ""+(i+1);
      }
    }
    return nums;
};
