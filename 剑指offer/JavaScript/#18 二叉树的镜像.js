/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 
 * @param {Binary Tree} root 
 */
function Mirror(root){
  if(!root){
    return null;
  }
  let tmpLeft = null;
  let tmpRight = null;
  if(root.left){
    tmpLeft = root.left;
  }
  if(root.right){
    tmpRight = root.right;
  }
  root.left = Mirror(tmpRight);
  root.right = Mirror(tmpLeft);
  
  return root;
}