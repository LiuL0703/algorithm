/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
 * 超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

/**
 * 
 * @param {Array} numbers 
 * @return {Number}
 */

function MoreThanHalfNum_Solution(numbers){
  let arr = {};
  if(numbers.length <= 1) return numbers[0];
  for(let i = 0; i < numbers.length; i++){
    if(!arr[numbers[i]]){
      arr[numbers[i]] = 1;
    } else{
      arr[numbers[i]] += 1;
      if (arr[numbers[i]] > numbers.length / 2){
        return numbers[i];
      }
    }
  }
  return 0;
}