/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 
 * @param {Binary Tree} pRoot1 
 * @param {Binary Tree} pRoot2 
 * @return {Boolean}
 */
function HasSubtree(pRoot1, pRoot2){
  if(!pRoot1 || !pRoot2 ){
    return false;
  }
  if(isSubStree(pRoot1, pRoot2)){
    return true;
  }else{
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
  }
}

function isSubStree(pRoot1, pRoot2){
  if(!pRoot2){
    return true;
  }
  if(!pRoot1){
    return false;
  }
  if(pRoot1.val !== pRoot2.val){
    return false;
  }
  return isSubStree(pRoot1.left,pRoot2.left) && isSubStree(pRoot1.right,pRoot2.right);
}