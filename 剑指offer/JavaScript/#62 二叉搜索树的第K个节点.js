/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。
 * 例如（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 */

/**
 * 思路：二叉搜索树按照中序遍历的顺序打印出来正好就是排序好的顺序
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k){
  if(!pRoot || k === 0) return null;
  function kth(pRoot){
    let target = null;
    if(pRoot.left){
      target = kth(pRoot.left, k);
    }
    if(!target){
      if(k===1){
        target = pRoot;
      }
      k--;
    }
    if(pRoot.right && !target){
      target = kth(pRoot.right, k);
    }
    return target;
  }
  return kth(pRoot);
}

function KthNode(pRoot, k){
  if(!pRoot || k === 0) return null;
  let count = 0;
  let res = null;
  let stack = [];
  while(pRoot || stack.length !== 0){
    if(pRoot){
      stack.push(pRoot);
      pRoot = pRoot.left;
    }else{
      count++;
      pRoot = stack.pop();
      if(count === k){
        res = pRoot;
        break;
      }
      pRoot = pRoot.right;
    }
  }
  if(k>count){
    return null;
  }
  return res;
}
