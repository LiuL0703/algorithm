/**
 * 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 */


 /**
  * 思路：例如13+9 = 22
  * 拆分开 1.不考虑进位对对应位相加 sum = 12
  * 2.只考虑进位 carry = 10
  * 如果carry不为0 重复步骤 1. 2
  * 
  */

/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function Add(num1, num2){
   if(!num2) return num1;
   let sum = num1 ^ num2;
   let carry = (num1&num2)<<1;
   return Add(sum, carry);
}

 /**
  * 减法
  * 
  */