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


var isPowerOfTwo = function(n) {
    n = n.toString(2);
    var len = n.length-1;
    var re = new RegExp("0"+"{"+len+"}")
    if(n[0]==="1"&&re.test(n.slice(1))){
      return true;
    }
    return false;
};