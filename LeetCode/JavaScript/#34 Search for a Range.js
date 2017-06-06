/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var res = [-1,-1];
    var pos = nums.indexOf(target);
    if(pos===-1) return res;
    res[0] = pos;
    pos =nums.length-(1 + nums.reverse().indexOf(target));
    res[1] = pos;
    return res;
};