/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形
 * 请问用n个2*1的小矩形无重叠地覆盖一个(2 * n) 的大矩形，总共有多少种方法？
 *  设n=8
 * 竖着放 1 个 还剩f(7)
 * 竖着放 2 个 还剩 f(6)
 * f(8) = f(7)+f(6)
 */

/**
 * 
 * @param {Nmuber} number 
 */
function rectCover(number){
  if (number === 0) return 0;
  let fibOne = 1;
  let fibTwo = 2;

  while(--number){
    fibTwo += fibOne;
    fibOne = fibTwo - fibOne; 
  }
  return fibOne;
}