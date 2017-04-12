/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// recursion
var invertTree = function(root) {
	if(root === null){
		return root;
	}
    
    let temp = root.left;
	root.left = invertTree(root.right);
	root.right = invertTree(temp);
    
	return root;
};

// iteration
var invertTree = function(root) {
	if(root==null){
		return root;
	}
	var s = [root];
	while(s.length!==0){
		var top = s[s.length-1];
		var tmp = top.left;
		top.left = top.right;
		top.right = tmp;
		s.pop();
		if(top.left!==null){
			s.push(top.left);
		}
		if(top.right!==null){
			s.push(top.right);
		}
	}
	return root;
};