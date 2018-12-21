/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 *  n=1 ->[1]  
 *  n=2 ->[1,1],[2]  
 *  n=3 ->[1,1,1],[1,2],[2,1] 
 *  n=4 ->[1,1,1,1], [1,1,2],[2,1,1],[1,2,1],[2,2] 
 *  ...
 *  1 2 3 5 8 
 */

 /**
  * 
  * @param {Number} number 
  * @return {Number}
  */
function jumpFloor(number){
  let fibOne = 1;
  let fibTwo = 2;

  while(--number){
    fibTwo += fibOne;
    fibOne = fibTwo - fibOne; 
  }
  return fibOne;
}


/**
 *  一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 *  f(n) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)+f(n-1)
    f(n-1) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)
    f(n) = 2f(n-1)
 */