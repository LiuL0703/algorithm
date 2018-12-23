/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，
 * 偶数和偶数之间的相对位置不变。
 */

 /** 
  * 思路： 遍历数组 若为奇数则不动 若为偶数则添加在数组最后 时间复杂度为O(n)
  */
/**
 * 
 * @param {Array} array 
 */
function reOrderArray(array){
    let length = array.length;
    let i = 0;
    while(i < length){
      if(array[i]%2 === 0) {
        array.push(...array.splice(i,1));
        length -= 1;
      } else {
        i += 1;
      }
    }
    return array;
}