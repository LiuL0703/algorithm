/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!==-1){
      return nums.indexOf(target);
    }
    var len = nums.length;
    var low = 0;
    var hight =len-1;
    var mid;
    if(target<nums[low]) return 0;
    if(target>nums[hight]) return len;
    while(low<hight){
      mid = parseInt((low+hight)/2);
      if(target>nums[mid]){
        low = mid;
      }
      if(target<nums[mid]){
        hight = mid;
      }
      if(low+1===hight){
        break;
      }
    }
    return hight;
};

searchInsert([1,2,3,4,6,7,8],5);