/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b===0){
    	return a;
    }
    var sum = a^b;
    var carry = (a&b)<<1;
    return getSum(sum,carry);
};