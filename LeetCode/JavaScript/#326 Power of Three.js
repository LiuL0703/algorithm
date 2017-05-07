/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return /^10*$/.test(n.toString(3));
};

//
var isPowerOfThree = function(n) {
	// 1162261467 = 3^19  3^20超出最大整数范围
    return (n>0&& 1162261467%n===0);
};