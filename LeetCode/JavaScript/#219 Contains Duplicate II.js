/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// My Way
var containsNearbyDuplicate = function(nums, k) {
    if(Array.from(new Set(nums)).toString()===nums.toString()) return false;
    var len = nums.length;
    for(let i=0;i<len;i++){
      for(let j = i+1;j<len;j++){
        if(nums[i]===nums[j]&&Math.abs(i-j)<=k){
          return true;
        }
      }
    }
    return false;  
};

//  Others Great way
var containsNearbyDuplicate = function(nums, k) {
    const dic = new Map();
    for (let i = 0; i < nums.length; i++) {
        // delete entries more than `k` away as we go
        if (i > k) {
            dic.delete(nums[i - 1 - k]);
        }
        let key = nums[i];
        // check if value was previously added
        if (dic.has(key)) {
            return true;
        }
        // set value: index
        dic.set(key, i);
    }
    return false;
};