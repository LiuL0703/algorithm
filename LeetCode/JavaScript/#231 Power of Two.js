/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n>=2){
    	n = n/2;
    }
    if(n===1){
    	return true;
    }else{
    	return false;
    }
};