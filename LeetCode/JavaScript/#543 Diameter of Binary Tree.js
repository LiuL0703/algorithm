/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
   if(root===null||root.left===null&&root.right===null)return 0;
   var res = 0;
   function deep(root){
        var num1 = 0;
        var num2 = 0;
        if(root===null) return 0;
        num1 = deep(root.left);
        num2 = deep(root.right);
        res = Math.max(res,num1+num2);
        return Math.max(num1,num2)+1;
   }
   deep(root);
   return res;
};