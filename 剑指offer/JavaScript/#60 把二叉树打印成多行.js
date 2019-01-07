/**
 * 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot){
  const res = [];
  if(pRoot){
    const queue = [];
    queue.push(pRoot);
    while(queue.length){
      let tmpRes = [];
      let length = queue.length;
      for(let i = 0; i < length; i++){
        let tmp = queue.shift();
        tmpRes.push(tmp.val);
        if(tmp.left){
          queue.push(tmp.left);
        }
        if(tmp.right){
          queue.push(tmp.right);
        }
      }
      res.push(tmpRes);
    }
  }
  return res;
}
