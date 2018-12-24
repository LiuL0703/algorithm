/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

 /**
  * 
  * @param {Array} sequence 
  * @return {Boolean}
  */
function VerifySquenceOfBST(sequence){
    if(!sequence.length) return false;
    return Core(sequence, 0, sequence.length);
}
function Core(sequence, start, end){
  // 获取根节点
  let root = sequence[end-1];
  let i = start;

  // 左子树
  for(; i < end - 1; i++){
    if(root < sequence[i]){
      break;
    }
  }

  // 右子树
  for(let j = i; j < end - 1; j++){
    if(root > sequence[j]){
      return false;
    }
  }
  let left = true;
  let right = true;
  if(i > start){
    left = Core(sequence, start, i)
  }
  if(i < end - 1){
    right = Core(sequence, i, end - 1);
  }

  return left && right;
}