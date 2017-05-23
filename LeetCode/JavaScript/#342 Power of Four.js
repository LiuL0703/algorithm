/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    n = n.toString(2);
    var len = n.length-1;
    var re = new RegExp("0"+"{"+len+"}")
    if(n[0]==="1"&&len%2===0&&re.test(n.slice(1))){
      return true;
    }
    return false;
};