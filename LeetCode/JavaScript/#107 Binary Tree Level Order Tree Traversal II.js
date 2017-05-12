/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) return [];
	var res = [[root.val]];
	var leval = 1;
    function traversal(root,leval){
    	var temp = [];
    	if(root === null) return root;
    	if(root.left!==null){
    		temp.push(root.left.val)
    	}
		if(root.right!==null){
    		temp.push(root.right.val)
    	}
    	if(temp.length!==0){
    		if(res[leval]=== undefined){
    			res.push(temp)
    		}else{
    			res[leval]=res[leval].concat(temp);
    		}
    		//res[leval]=== undefined?res.push(temp):
    		//	res[leval]=res[leval].concat(temp);
    	}
    	traversal(root.left,leval+1);
    	traversal(root.right,leval+1);
    }
    traversal(root,leval);
    return res.reverse();
};











