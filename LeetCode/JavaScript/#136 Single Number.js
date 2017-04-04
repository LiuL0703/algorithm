/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-04 18:19:05
 * @version $Id$
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((a,b)=>{return a^b;});
};