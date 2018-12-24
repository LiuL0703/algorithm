/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，
 * 请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */

 /**
  * 
  * @param {Stack} pushV 
  * @param {Stack} popV 
  */
function IsPopOrder(pushV, popV){
  let helpStack = [];
  if(pushV.length !== popV.length){
    return false;
  }
  let index = 0;
  for(let i = 0; i < pushV.length; i++){
    helpStack.push(pushV[i]);
    while(helpStack.length && helpStack[helpStack.length - 1]===popV[index]){
      helpStack.pop();
      index++;
    }
  }
  return helpStack.length === 0;
}                     