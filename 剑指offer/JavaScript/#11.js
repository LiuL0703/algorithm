/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */

// function NumberOf1(n){
//     let str = '';
//     if( n > 0 ){
//       str = n.toString(2);
//     } else{
//       n = -n;
//       n = n-1;
//       str = n.toString(2);
//       str = exchangeNegativeNum(str);
//     }
//     return cal(str);
// }

// function exchangeNegativeNum(str){
//   str = str.split('');
//   for(let i = 0; i < str.length; i++){
//     str[i] = str[i]==='0' ? '1' : '0';
//   }
//   return str.join('');
// }
// function cal(str){
//   let res = 0;
//   for(let i = 0; i < str.length; i++){
//     if(str[i]==='1'){
//       res += 1;
//     }
//   }
//   return res;
// }


/**
 * 思路：用1和n进行位运算，结果为1则n的二进制最右边一位为1，否则为0；
 *  将1左移一位继续进行位运算，直到左移32位截至。
 */
function NumberOf1(n){
  let count=0,flag=1;
  while(flag){
    if(n&flag){
      count++;
    }
    flag=flag<<1;
  }
  return count;
}


/**
 * 方法二： --> 用1和n进行位运算，结果为1则n的二进制最右边一位为1，否则为0；
 * 将n二进制形式右移1位，继续与1进行位运算
 * 由于负数右移时最高位补1，因此不能采用算术右移，而使用不考虑符号位的逻辑右移。
 */
function NumberOf1(n){
  var count = 0;
  while (n != 0) {
      if ((n & 1) == 1) {
          count++;
      }
      n = n >>> 1;
  }
  return count;  
}
