/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 * 输出描述:对应每个测试案例，输出两个数，小的先输出。
 */

/**
 * 判断当前元素的对应元素存在于数组中，则直接输出
 */
/**
 * 
 * @param {Array[]} array 
 * @param {Number} sum 
 */
function FindNumbersWithSum(array, sum){
  for(let i = 0; i < array.length; i++){
    let pos = array.indexOf(sum - array[i]);
    if(pos !== -1){
      return [array[i], array[pos]];
    }
  }
  return [];
}