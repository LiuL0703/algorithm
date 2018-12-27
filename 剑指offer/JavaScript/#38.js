/**
 * 输入一棵二叉树，求该树的深度。
 * 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，
 * 最长路径的长度为树的深度。
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot){
  if(!pRoot) return 0;
  let l = TreeDepth(pRoot.left) + 1;
  let r = TreeDepth(pRoot.right) + 1;
  return Math.max(l, r);
}
