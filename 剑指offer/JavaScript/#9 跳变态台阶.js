
/**
 *  一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 *  f(n) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)+f(n-1)
    f(n-1) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)
    f(n) = 2f(n-1)
 */

function jumpFloorII(number){
   if (number === 1) {
     return number;
   }
   return 2*jumpFloorII(number-1);
}

// 非递归
function jumpFloorII(number) {
    let i=1;
    while(--number){
        i*=2;
    }
    return i;
}


/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个m级的台阶总共有多少种跳法。
 * f(n) =  f(n-1) + f(n-2) + f(n-3) + ... + f(n-m)
 * f(n-1) = f(n-2) + f(n-3) + ... + f(n-m) + f(n-m-1)
 * 
 * f(n) = 2f(n-1) - f(n-m-1)
 * 
 * m<=n时 f(n) = 2f(n-1)
 * m>n时 f(n) = 2f(n-1) - f(n-m-1)
 */