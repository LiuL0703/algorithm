/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */
const outStack = [];
const inStack = [];

function push(node){
  inStack.push(node);
}
function pop(){
  if (outStack.length){
    while(inStack.length){
      outStack.push(inStack.pop());
    }
  }
  return outStack.pop();
}