/**
 * @param {number} c
 * @return {boolean}
 */

var judgeSquareSum = function(c) {
	var mid = ~~(Math.sqrt(c/2));
    for(var i = 0; i <= mid;i++){
    	if(Number.isInteger(Math.sqrt(c-Math.pow(i,2))))
    		return true;
    }
    return false;
};