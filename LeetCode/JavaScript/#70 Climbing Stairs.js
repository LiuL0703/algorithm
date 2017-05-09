/**
 * @param {number} n
 * @return {number}
 */
/* 

第1级：1
第2级：2
第3级：1+2=3（前一步要么从第1级迈上来,要么从第2级迈上来）
第4级：2+3=5（前一步要么从第2级迈上来,要么从第3级迈上来）
第5级：3+5=8
第6级：5+8=13
第7级：8+13=21
第8级：13+21=34
第9级：21+34=55
第10级：34+55=89．

*/

// TLE
/*var climbStairs = function(n) {
    if(n<=2){
      return n;
    }
    else{
      return climbStairs(n-1)+climbStairs(n-2);
    }
};*/


var climbStairs = function(n) {
    if(n===1||n===2){
      return n;
    }
    var after_one = 2;
    var after_two = 1;
    var res;

    for(let i = 2;i<n;i++){
      res = after_one+after_two;
      after_two = after_one;
      after_one = res;
    }

    return res;
};


//  brilliant solution 
var climbStairs = function(n) {
    var arr = [0, 1, 2];
    for (var i = 3; i <= n; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr[n];
};