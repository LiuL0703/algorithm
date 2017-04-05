/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
	var res = [];
    var stop = nums.length;
    var i;
    for(i=1;i<=stop;i++){
      if(nums.indexOf(i)===-1){
        res.push(i);
      }
    }
    return res;
};