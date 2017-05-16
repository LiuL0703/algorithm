/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function(n) {
    var v = Math.sqrt(2 * n + 1/4);
    var k = (v - 0.5) | 0;
    return k;
};

// Second 
var arrangeCoins = function(n) {
    if(n===1)return 1;
    var res = 0;
    var tmp = 1;
    n = n - tmp;
    while(n>=0){
      res++;
      tmp++;
      n -= tmp;
    }
    return res;
};