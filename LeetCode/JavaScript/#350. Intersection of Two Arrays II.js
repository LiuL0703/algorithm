/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1===nums2) return nums1;
    var len1 = nums1.length;
    var len2 = nums2.length;
    var res = [];
    var pos;
    if(len1<len2){
    	for(let i = 0;i<len1;i++){
    		pos = nums2.indexOf(nums1[i]);
    		if(pos!==-1){
    			res.push(nums1[i]);
    			nums2.splice(pos,1);
    		}
    	}
    }else{
    	for(let i = 0;i<len2;i++){
    		pos = nums1.indexOf(nums2[i]);
    		if(pos!==-1){
    			res.push(nums2[i]);
    			nums1.splice(pos,1);
    		}
    	}
    }
    return res;
};
