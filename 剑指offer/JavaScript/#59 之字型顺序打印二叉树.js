/**
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */

/**
 * 思路：使用两个栈 打印某一层节点时 将下一层的保存到对应的栈里
 *  如果是奇数层：则先保留左子树再保留右子树
 *  如果是偶数层：则先保留右子树再保留左子树
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot){
  let res = [];
  if(!pRoot) return res;
  let stack1 = [];
  let stack2 = [];
  stack2.push(pRoot);
  let i = 1;
  while(stack1.length !== 0 || stack2.length !== 0){
    let list = [];
    // 奇数层
    if((i & 1) === 1) {
      while(stack2.length !== 0){
        let tmp = stack2.pop();
        list.push(tmp.val);
        if(tmp.left){
          stack1.push(tmp.left);
        }
        if(tmp.right){
          stack1.push(tmp.right);
        }
      }
    } else {
      while(stack1.length!== 0){
        let tmp = stack1.pop();
        list.push(tmp.val);
        if(tmp.right){
          stack2.push(tmp.right);
        }
        if(tmp.left){
          stack2.push(tmp.left);
        }
      }
    }
    i++;
    res.push(list);
  }
  return res;
}

