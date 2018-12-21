/**
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 */

/**
 * 思路：既然数组是有序的 要找一个数是否存在 遍历查找
 */

/**
 * @param {arrayay[][]} array 
 * @param {number} target 
 * @return {boolean}
 */
function findTarget(array, target){
  let col = array.length;
  let row = array[0].length;

  let low = 0;
  let high = col - 1;
  if (col === 0 && row === 0) {
    return false;
  }

  while (high >= 0 && low <= row - 1) {
    if (array[high][low] > target) {
      high -= 1;
    } else if(array[high][low] < target) {
      low += 1;
    } else {
      return true;
    }
  }

  return false;
}