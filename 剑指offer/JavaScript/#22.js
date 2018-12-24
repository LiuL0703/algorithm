/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
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
function PrintFromTopToBottom(root){
  let res = [];
  let q = [];
  if(!root){
    return res;
  }
  q.push(root);
  while(q.length){
    let p = q.shift();
    if(p.left){
      q.push(p.left);
    }
    if(p.right){
      q.push(p.right);
    }
    res.push(p.val);
  }
  return res;
}