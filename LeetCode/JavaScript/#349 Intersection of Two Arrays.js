/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = [];
    nums1 = Array.from(new Set(nums1));
    nums2 = Array.from(new Set(nums2));
    var len = nums2.length;
    for(let i = 0;i<len;i++){
    	if(nums1.indexOf(nums2[i])!==-1){
    		res.push(nums2[i]);
    	}
    }
    return res;
};