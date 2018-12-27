/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
 * 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
 * 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
 * 该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

 /**
  * @param {Array} rotateArray 
  */
function minNumberInRotateArray(rotateArray){
  if (rotateArray.length === 0) {
    return 0;
  }
  let index = 0;
  for( let i = 0; i < rotateArray.length - 1; i++ ){
    if(rotateArray[i] > rotateArray[i + 1]) {
      index = i + 1;
    }
  }
  return rotateArray[index];
}