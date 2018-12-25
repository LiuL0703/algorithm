/**
 * 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(
 * 注意: 在返回值的list中，数组长度大的数组靠前)
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 
 * @param {Binary Tree} root 
 * @param {Number} expectNumber 
 */
function FindPath(root, expectNumber){
  let list = [];
  let res = [];
  return find(root, expectNumber, list, res);
}

function find(root, expectNumber, list, res) {
  if (!root){
    return res;
  }
  list.push(root.val);
  let m = expectNumber - root.val;
  if(!root.left && !root.right && m === 0){
    res.push([...list]);
  }
  find(root.left, m, list, res);
  find(root.right, m, list, res);
  list.pop();
  return res;
}